import express from "express";

let app = express.Router();

app.get("/", (req, res) => {
	res.send("Hi Mom from vol router!");
});

export { app };
