const bcrypt = require('bcrypt')
const express = require('express');
const {PrismaClient} = require('@prisma/client')
const {findUser} = require("./Database")
const {getUserRole} = require("./Database")
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const randToken = require('rand-token')

const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const saltOrRounds = 10;

const localHostPort = 8080;


const SECRET = "secretisimo"
const refreshTokens = {}

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use(passport.initialize())
app.use(passport.session())

const opts = {}

// Setup JWT options
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = SECRET

passport.use("api", new JwtStrategy(opts, function (jwtPayload, done) {
	//If the token has expiration, raise unauthorized
	const expirationDate = new Date(jwtPayload.exp * 1000)
	if(expirationDate < new Date()) {
		return done(null, false);
	}
	const user = jwtPayload
	done(null, user)
}))

passport.serializeUser(function (user, done) {
	done(null, user.username)
})

app.post("/authenticate", async (req, res) => {
	const prisma = new PrismaClient()
	const user = await findUser(prisma, req.body.email)

	const hash = await bcrypt.hashSync("password", saltOrRounds);

	console.log(hash)

	if (user == null) {
		res.send(401)
	} else {

		const password = await req.body.password
		const passwordHashed = await user.token

		console.log(passwordHashed)
		console.log(password)

		const isMatch = await bcrypt.compareSync(password, passwordHashed);

		console.log(isMatch)

		if (isMatch) {

			const role = await getUserRole(prisma, req.body.email)

			const u = {
				'email': user.correo,
				'role': role.nombre,
			}
			const token = jwt.sign(user, SECRET, {expiresIn: 300})
			const refreshToken = randToken.uid(256)
			refreshTokens[refreshToken] = u.email

			res.json({
				token: 'JWT ' + token,
				refreshToken: refreshToken
			})
		} else {
			res.send(401)
		}
	}
	prisma.$disconnect()
})

app.post('/token', async function (req, res, next) {
	const email = req.body.email
	const refreshToken = req.body.refreshToken
	if ((refreshToken in refreshTokens) && (refreshTokens[refreshToken] === email)) {
		const prisma = new PrismaClient()
		const role = await getUserRole(prisma, req.body.email)
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
	if(refreshToken in refreshTokens) {
		delete refreshTokens[refreshToken]
	}
	res.send(204)
})

app.get('/test_jwt', passport.authenticate('jwt'), function (req, res) {
	res.json({success: 'You are authenticated with JWT!', user: req.user})
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