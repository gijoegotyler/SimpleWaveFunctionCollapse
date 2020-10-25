const express = require("express");
let app = express();
let server = require("http").Server(app);
let url = require("url");
let fs = require("fs");

app.use(express.static(__dirname + "/static"));

let imageDir = __dirname + "/assets/";

app.get("/", (req, res) => {
    res.sendFile(__dirname + "static/index.html");
});

// quick image access api to access assets
app.get("/image/:name", (req, res) => {
    let pic = req.params.name + ".png";
    fs.readFile(imageDir + pic, (err, content) => {
        if (err) {
            res.writeHead(400, { "Content-type": "text/html" });
            console.log(err);
            res.end("No such image");
        } else {
            //specify the content type in the response will be an image
            res.writeHead(200, { "Content-type": "image/jpg" });
            res.end(content);
        }
    });
});

server.listen(8080, () => {
    console.log("listening on port 8080");
});