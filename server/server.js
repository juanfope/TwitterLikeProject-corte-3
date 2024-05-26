const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = [
    { username: "thefatrat", password: "ratablanca", email: "rataratosa@gmail.com" },
    { username: "capyguiro", password: "elviajedechiguiro", email: "chiguirin@gmail.com" },
    { username: "biden007", password: "fucktrump", email: "joemama@gmail.com" }
];

let posts = [
    { username: "thefatrat", tweetContent: "Cuenta la historia de un mago que un dia en su bosque encantado lloró" },
    { username: "capyguiro", tweetContent: "KFC >>> Frisby" },
    { username: "biden007", tweetContent: "satdgastguyfsagfsay" }
];

const secretKey = 'baitusedtobebelievable';

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello there"
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
        res.json({ success: true, token: token, username: user.username });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

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

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (token) {
        jwt.verify(token, secretKey, (err, authData) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.authData = authData;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.post('/submitPost', authenticateJWT, (req, res) => {
    const { postContent } = req.body;
    const { username } = req.authData;

    const newPost = { username, tweetContent: postContent, timestamp: new Date() };
    posts.push(newPost);

    res.json({ success: true, post: newPost });
});

app.delete('/deletePost', authenticateJWT, (req, res) => {
    const { username, tweetContent } = req.body;
    const { authData } = req;
    if (authData.username !== username) {
        return res.status(403).json({ success: false, message: 'You can only delete your own posts' });
    }

    const postIndex = posts.findIndex(post => post.username === username && post.tweetContent === tweetContent);

    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.json({ success: true, message: 'Post deleted successfully' });
    } else {
        res.status(404).json({ success: false, message: 'Post not found' });
    }
});


app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get('/auth/check', authenticateJWT, (req, res) => {
    res.json({ success: true, message: 'Token is valid' });
});

app.listen(5000, () => { console.log("Server started on port 5000") });
