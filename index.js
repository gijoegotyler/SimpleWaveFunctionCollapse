const express = require("express");
let app = express();
let server = require("http").Server(app);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});