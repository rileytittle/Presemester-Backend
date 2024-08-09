import { Router } from "express";
import { User } from "../models/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
//for the pre-semester project, we created a user and stored the data in the app.
//We obviously wouldn't do this for the actual app, we just needed some data without
//a database
let adminList: User[] = [];

let app = Router();

app.post("/login", (req, res, next) => {
	if (req.headers["authorization"]) {
		let userInfo = req.headers["authorization"].split(" ")[1];
		let decodedUserInfo = atob(userInfo);
		let userName = decodedUserInfo.split(":")[0];
		let password = decodedUserInfo.split(":")[1];
		let foundUser: User | undefined = undefined;
		for (let user of adminList) {
			if (user.userName == userName) {
				foundUser = user;
				break;
			}
		}
		if (foundUser == undefined) {
			res.status(401).send({ message: "Invalid username or password" });
		} else {
			bcrypt.compare(password, foundUser.password, (err, result) => {
				if (result) {
					let token = jwt.sign(
						{
							username: foundUser?.userName,
							admin: true,
						},
						"PRESEMESTER"
					);
					res.status(200).send({ token: token });
				} else {
					res.status(401).send({
						message: "Invalid username or password 1",
					});
				}
			});
		}
	} else {
		res.status(401).send({ message: "Invalid username or password 2" });
	}
});
app.post("/", (req, res, next) => {
	//console.log("Actually post a user")
	let userNameValid = true;
	for (let u of adminList) {
		if (u.userName == req.body.userName) {
			userNameValid = false;
		}
	}
	if (userNameValid) {
		let newUser = new User();
		bcrypt.genSalt(saltRounds, (err, salt) => {
			bcrypt.hash(req.body.password, salt, (err, hash) => {
				newUser.userName = req.body.userName;
				newUser.password = hash;
				adminList.push(newUser);
				res.status(201).send({ username: newUser.userName });
			});
		});
	} else {
		res.status(400).send({ status: 400, message: "Email already in use" });
	}
});
export { app };
