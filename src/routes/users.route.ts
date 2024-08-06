import { Router } from "express";
import { User } from "../models/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
//for the pre-semester project, we created a user and stored the data in the app.
//We obviously wouldn't do this for the actual app, we just needed some data without
//a database
let adminList: User[] = [
	{
		userName: "adminUser",
		password: "pass123",
	},
];

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
							exp: Math.floor(Date.now() / 1000) + 60,
						},
						"SECRETKEY"
					);
					res.status(200).send({ token: token });
				} else {
					res.status(401).send({
						message: "Invalid username or password",
					});
				}
			});
		}
	} else {
		res.status(401).send({ message: "Invalid username or password" });
	}
});
