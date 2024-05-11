const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

app.get("/login", (req, res) => {
    res.send(`<html>
                <head>
                    <title>Login</title>
                </head>
                <body>
                    <form method="POST" action="/auth">
                        Usuario: <input type="text" name="text" /><br />
                        Contraseña: <input type="password" name="password" /><br />
                        <input type="submit" value="Iniciar sesion" />
                    </form>
                </body>`
    )
})

app.post("/auth", (req, res) => {
    const {username, password} = req.body

    const user = {username: username}

    const accessToken =generateAccessToken(user)

    res.header('authorization', accessToken).json({
        message: 'Usuario autenticado',
        token: accessToken
    })
})

function generateAccessToken(user){
    return jwt.sign(user, process.env.SECRET, {expiresIn: '5m'})
}

function validateToken(req, res, next){
    const accessToken = req.headers['authorization']
    if(!accessToken) res.send('Acces denied')

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if(err){
            res.send('Access denied, token expires or incorrect')
        }else{
            next()
        }
    })
}

app.listen(5000, () => {console.log("Server started on port 5000") })