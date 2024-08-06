import { Router } from "express";
import { User } from "../models/users.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;
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

app.post("/", (req, res, next) => {
	let newUser = new User();
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(req.body.password, salt, (err, hash) => {
			newUser.userName = req.body.username;
			newUser.password = hash;
			adminList.push(newUser);
			res.send(newUser);
			res.status(201).send(newUser);
		});
	});
	//Object.assign(newUser, req.body);
});
