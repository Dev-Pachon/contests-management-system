const bcrypt = require('bcrypt')
const express = require('express');
const {PrismaClient} = require('@prisma/client')
const {findUser} = require("./Database")
const {getUserRole} = require("./Database")
const jwt = require('jsonwebtoken')
const randToken = require('rand-token')
const ExtractJwt = require('passport-jwt').ExtractJwt

const saltOrRounds = 10;

const localHostPort = 8080;


const SECRET = "secretisimo"
const refreshTokens = {}

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

const opts = {}
// Setup JWT options
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = SECRET

function ensureToken(req, res, next) {
	const bearerHeader = req.headers['token'];

	if(bearerHeader !== "undefined"){
		const bearer = bearerHeader.split(" ")
		const bearerToken = bearer[1]
		req.token = bearerToken
		console.log(bearerToken+"hi")
		next()
	}else {
		res.sendStatus(401)
	}
}

app.post("/login", async (req, res) => {
	const prisma = new PrismaClient()
	const userCredentials = await findUser(prisma, req.body.email)
	const hash = await bcrypt.hashSync("password", saltOrRounds);

	console.log(hash)

	if (userCredentials == null) {
		res.sendStatus(401)
	} else {

		const password = await req.body.password
		const passwordHashed = await userCredentials.token

		console.log(passwordHashed)
		console.log(password)

		const isMatch = await bcrypt.compareSync(password, passwordHashed);

		console.log(isMatch)

		if (isMatch) {

			const role = await getUserRole(prisma, req.body.email)
			const u = {
				'email': userCredentials.correo,
				'role': role.nombre,
			}
			const token = jwt.sign(u, SECRET, {expiresIn: 300})
			const refreshToken = randToken.uid(256)
			refreshTokens[refreshToken] = u.email
			res.json({
				user: userCredentials.username,
				token: "Bearer " + token,
				refreshToken: refreshToken,
			})
		} else {
			res.sendStatus(401)
		}
	}
	await prisma.$disconnect()
})

app.post('/token', async function (req, res, next) {
	const email = req.body.email
	const refreshToken = req.body.refreshToken
	if ((refreshToken in refreshTokens) && (refreshTokens[refreshToken] === email)) {
		const prisma = new PrismaClient()
		const role = await getUserRole(prisma, req.body.email)
		await prisma.$disconnect()
		const u = {
			'email': email,
			'role': role.nombre
		}
		const token = jwt.sign(u, SECRET, {expiresIn: 300})
		res.json({token: 'JWT ' + token})
	} else {
		res.send(401)
	}
})

app.post('/token/reject', function (req, res, next) {
	const refreshToken = req.body.refreshToken
	if (refreshToken in refreshTokens) {
		delete refreshTokens[refreshToken]
	}
	res.send(204)
})

app.get('/auth/:page', ensureToken, function (req, res) {
	jwt.verify(req.token,SECRET, (err, data)=>{
		if(err){
			res.redirect(401,"http://localhost:3000/login")
		}else {
			res.body = data;
			res.sendStatus(200);
		}
	})
})

app.post("/register", async (req, res) => {

})

app.get("/activate/:id", (req, res) => {

})


class User {
	constructor(email, password, nickname, firstName, lastName, country, verified) {
		this.email = email;
		this.password = password;
		this.nickname = nickname;
		this.firstName = firstName;
		this.lastName = lastName;
		this.country = country;
		this.verified = verified;
	}
}

let usersObjects = [
	a = new User("seyerman@dejanosEnPaz.com", "contrasenia", "seyerman", "Juan Manuel", "Reyes Garcia", "univalle", true)
]
app.get("/users", (req, res) => {
	let aux = new User("email", "password", "nickname", "firstName", "lastName", " country", true);
	usersObjects.push(aux);
	res.send(usersObjects);
})

app.get("/list", (req, res) => {
	res.send();
})

app.listen(localHostPort);