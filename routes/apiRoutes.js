module.exports = function(app) {
    app.get("/api/notes", (req, res)=>{
        const path = req.url;
        console.log(`GET request to : ${path}`);
        res.end("you have hit the server!");
    });

    app.post("/api/notes", (req, res)=>{
        const path = req.url;
        console.log(`POST request to : ${path}`);
        res.end("you have hit the server!");
    });

    app.delete("/api/notes/:id", (req, res)=>{
        const id = req.params.id;
        const path = req.url;
        console.log(`DELETE request to : ${path}`, `note number ${id} will be deleted`);
        res.end("you have hit the server!");
    });
}