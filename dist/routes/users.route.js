"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_model_1 = require("../models/users.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const saltRounds = 10;
let adminList = [];
let app = (0, express_1.Router)();
app.post("/login", (req, res, next) => {
    if (req.headers["authorization"]) {
        let userInfo = req.headers["authorization"].split(" ")[1];
        let decodedUserInfo = atob(userInfo);
        let userName = decodedUserInfo.split(":")[0];
        let password = decodedUserInfo.split(":")[1];
        let foundUser = undefined;
        for (let user of adminList) {
            if (user.userName == userName) {
                foundUser = user;
                break;
            }
        }
        if (foundUser == undefined) {
            res.status(401).send({ message: "Invalid username or password" });
        }
        else {
            bcrypt_1.default.compare(password, foundUser.password, (err, result) => {
                if (result) {
                    let token = jsonwebtoken_1.default.sign({
                        username: foundUser === null || foundUser === void 0 ? void 0 : foundUser.userName,
                        exp: Math.floor(Date.now() / 1000) + 60,
                    }, "SECRETKEY");
                    res.status(200).send({ token: token });
                }
                else {
                    res.status(401).send({
                        message: "Invalid username or password",
                    });
                }
            });
        }
    }
    else {
        res.status(401).send({ message: "Invalid username or password" });
    }
});
app.post("/", (req, res, next) => {
    let newUser = new users_model_1.User();
    bcrypt_1.default.genSalt(saltRounds, (err, salt) => {
        bcrypt_1.default.hash(req.body.password, salt, (err, hash) => {
            newUser.userName = req.body.username;
            newUser.password = hash;
            adminList.push(newUser);
            res.send(newUser);
            res.status(201).send(newUser);
        });
    });
    //Object.assign(newUser, req.body);
});
