const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bodyParser = require('body-parser')

const users=[
    {"email": "rataratosa@gmail.com","username":"thefatrat","id":"111","password":"ratablanca"},
    {"email": "chiguirin@gmail.com","username":"capyguiro","id":"222","password":"elviajedechiguiro"},
    {"email": "joemama@gmail.com","username":"biden007","id":"333","password":"fucktrump"}
]

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.json({
        message: "Hello there"
    })
})

app.post("/login", (req, res) => {
    console.log('req data', req.body.password,req.body.email)
    users.filter(user => {
        if(user.email===req.body.email){
            if(user.password===req.body.password){
                console.log(user)

                const payload = {
                    "id": user.id
                }

                jwt.sign(payload, 'shhh', {expiresIn: '10h'},(err,token) => {
                    res.json({
                        token: token,
                    } 
                    )
                })
            }
        }
    })
})

app.post("/dailymeme", verifyToken, (req,res)=>{
    jwt.verify(req.token, 'shhh', (err, authData)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                message: "Meme charged ;D",
                authData: authData
            })
        }
    })
})

function verifyToken(req, res, next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader!=='undefined'){
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next()
    }
    else{
        res.sendStatus(403)
    }
}

app.listen(5000, () => {console.log("Server started on port 5000") })