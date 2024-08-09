"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthChecker = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let AuthChecker = (req, res, next) => {
    if (req.headers["authorization"]) {
        let header = req.headers["authorization"];
        if (header.includes("Bearer")) {
            let token = header.split(" ")[1];
            try {
                let payload = jsonwebtoken_1.default.verify(token, "PRESEMESTER");
                res.setHeader("loggedinuser", payload.username);
                next();
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ message: "Could not verify token" });
            }
        }
        else if (header.includes("Basic") && req.url == "/Login") {
            next();
        }
        else {
            console.log(req.url);
            res.status(401).send({ message: "No authorization header" });
        }
    }
    else if (req.originalUrl === "/users/login") {
        next();
    }
    else {
        res.status(403).send({ message: "Unauthorized" });
    }
};
exports.AuthChecker = AuthChecker;
