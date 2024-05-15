const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors');

const users=[
    {username:"thefatrat", password:"ratablanca", email:"rataratosa@gmail.com"},
    {username:"capyguiro", password:"elviajedechiguiro", email:"chiguirin@gmail.com"},
    {username:"biden007", password:"fucktrump", email: "joemama@gmail.com"}
]

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello there"
    })
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

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