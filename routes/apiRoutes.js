const fs = require("fs");
const path = require("path");

module.exports = function(app) {
    app.get("/api/notes", (req, res)=>{
        const urlPath = req.url;
        fs.readFile(path.join(__dirname, "/../db/db.json"), (err, data)=>{
            if (err) throw err;
            const stringData = data.toString();
            res.json(JSON.parse(stringData));
        });
    });

    app.post("/api/notes", (req, res)=>{
        const urlPath = req.url;
        const receivedNote = req.body;
        const {title, text} = receivedNote;
        console.log(title, text);
        fs.readFile(__dirname+"/../db/db.json", (err, data)=>{
            if (err) throw err;
            noteArr = JSON.parse(data.toString());
            newNote = {
                "title": title,
                "text": text,
            }
            newNote["id"] = (noteArr[(noteArr.length - 1)].id + 1)
            noteArr.push(newNote);
            console.log(noteArr);
            fs.writeFile(__dirname+"/../db/db.json", JSON.stringify(noteArr), (err)=>{
                if (err) throw err;
            });
        })
        const filePath = path.join(__dirname, "/../public/notes.html");
        res.sendFile(filePath);
    });

    app.delete("/api/notes/:id", (req, res)=>{
        const id = req.params.id;
        const urlPath = req.url;
        console.log(`DELETE request to : ${urlPath}`, `note number ${id} will be deleted`);
        fs.readFile(__dirname+"/../db/db.json", (err, data)=>{
            if (err) throw err;
            noteArr = JSON.parse(data.toString());
            for (i = 0; i < noteArr.length; i++) {
                if (noteArr[i]["id"] == id) {
                    noteArr.splice(i, 1);
                }
            }
            fs.writeFile(__dirname+"/../db/db.json", JSON.stringify(noteArr), (err)=>{
                if (err) throw err;
            });
        })
        const filePath = path.join(__dirname, "/../public/notes.html");
        res.sendFile(filePath);
    });
}