const express = require("express");
const app = express();
const port = 3000;

app.get('/post', (req, res) => {
    let posts = [];
    for (let i = 1; i <= 20; i++) {
        posts.push({id: i, title: `Post ${i}`});
    }
    res.send(posts);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});