require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const { MONGO_URL, BACKEND_PORT } = process.env;
const app = express();

app.listen(BACKEND_PORT, () => {
	console.log(`App is listening to port: ${BACKEND_PORT}`);
});

app.route("/")
	.get((req, res) =>{
		res.send("Hello world")
		})
	.post((req, res) =>{

		})
	.put((req, res) =>{

		})
	.delete((req, res) =>{

		})