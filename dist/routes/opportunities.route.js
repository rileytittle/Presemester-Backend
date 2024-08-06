"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
let app = express_1.default.Router();
exports.app = app;
app.get("/", (req, res) => {
    res.send("Hi Mom from opp router!");
});
