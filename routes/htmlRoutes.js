const fs = require("fs");
const path = require("path");


module.exports = function(app) {
    app.get("/notes", (req, res)=>{
        const urlPath = req.url;
        const filePath = path.join(__dirname, "/../public/notes.html");
        res.sendFile(filePath);
    });

    app.get("*", (req, res)=>{
        const urlPath = req.url;
        const filePath = path.join(__dirname, "/../public/index.html");
        res.sendFile(filePath);
    });
}