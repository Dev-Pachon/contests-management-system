//const bcrypt = require('bcrypt');
//const saltRounds = 10;
const localHostPort = 8080;

//express imports

const express = require('express');

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post("/authenticate", (req, res) => {

})



app.post("/register", async (req, res) => {

})

/*function hash(text) {
    let salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(text, salt)
}*/

function hash(text) {
    var result = "";
    for (var i = text.length - 1; i >= 0; i--) {
        result += text.charCodeAt(i).toString(16);
    }
    return result;
}

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
    a = new User("seyerman@dejanosEnPaz.com", hash("contrasenia"), "seyerman", "Juan Manuel", "Reyes Garcia", "univalle", true)
]
app.get("/users", (req, res) => {
    let aux = new User("email", "password", "nickname", "firstName", "lastName"," country", true);
    usersObjects.push(aux);
    res.send(usersObjects);
})

app.get("/list",(req, res)=>{
    res.send();
})

app.listen(localHostPort);