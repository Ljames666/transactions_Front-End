import express from "express";

let app = express();
let port = process.env.PORT || 8082;

app.use(express.json());
app.use(express.static(__dirname + "/../public/"));

app.listen(port, () => console.log("Starter server..."));
