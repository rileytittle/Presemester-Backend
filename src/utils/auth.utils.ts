import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

let AuthChecker = (req: Request, res: Response, next: NextFunction) => {
	if (req.headers["authorization"]) {
		let header = req.headers["authorization"];
		if (header.includes("Bearer")) {
			let token = header.split(" ")[1];
			try {
				let payload = jwt.verify(token, "PRESEMESTER") as any;
				res.setHeader("loggedinuser", payload.username);
				next();
			} catch (e) {
				console.log(e);
				res.status(401).send({ message: "Could not verify token" });
			}
		} else if (header.includes("Basic") && req.url == "/Login") {
			next();
		} else {
			console.log(req.url);
			res.status(401).send({ message: "No authorization header" });
		}
	} else if (req.originalUrl === "/users/login") {
		next();
	} else {
		res.status(403).send({ message: "Unauthorized" });
	}
};

export { AuthChecker };
