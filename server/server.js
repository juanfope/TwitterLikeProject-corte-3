const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

let currentUser = null;
const users = [
    { username: "thefatrat", password: "ratablanca", email: "rataratosa@gmail.com" },
    { username: "capyguiro", password: "elviajedechiguiro", email: "chiguirin@gmail.com" },
    { username: "biden007", password: "fucktrump", email: "joemama@gmail.com" }
];

const tweets = [
    {
        username: "thefatrat",
        tweetContent: "Cuenta la historia de un mago que un dia en su bosque encantado lloró",
        likes: 450
    },
    {
        username: "capyguiro",
        tweetContent: "KFC >>> Frisby",
        likes: 1111
    },
    {
        username: "biden007",
        tweetContent: "satdgastguyfsagfsay",
        likes: 3
    }
];

const secretKey = 'baitusedtobebelievable';

// Use cors middleware to handle CORS headers
app.use(cors({
  origin: 'http://localhost:3000' // Permitir solicitudes solo desde localhost:3000
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello there"
    });
});
//login post
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ success: true, token: token });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

//register post
app.post('/onlyregister', (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    const newUser = { username, password };
    users.push(newUser);

    res.status(200).json({ success: true, message: 'User registered successfully', user: newUser });
});

const posts = [];

//middleware token
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token) {
        jwt.verify(token, secretKey, (err, authData) => {
            if (err) {
                return res.sendStatus(403); // Token inválido
            }
            req.authData = authData; // Cambiar req.user a req.authData
            next();
        });
    } else {
        res.sendStatus(401); // Token no proporcionado
    }
};

app.post("/submitPost", authenticateJWT, (req, res) => {
    const { postContent } = req.body;
    const username = req.authData.username; // Cambiar authData.username a req.authData.username

    const newPost = {
        username,
        content: postContent,
        timestamp: new Date()
    };

    posts.push(newPost);

    res.json({
        success: true,
        message: 'Post submitted successfully',
        post: newPost
    });
});

app.get("/posts", (req, res) => {
    res.json(posts);
});

//validacion token
app.get('/auth/check', authenticateJWT, (req, res) => {
    res.json({ success: true, message: 'Token is valid' });
});

app.get('/dailymeme', authenticateJWT, (req, res) => {
    res.json({ success: true, message: 'Access granted to protected route' });
});

app.get('/post', authenticateJWT, (req, res) => {
    res.json({ success: true, message: 'Access granted to protected route' });
});

app.listen(5000, () => { console.log("Server started on port 5000") });
