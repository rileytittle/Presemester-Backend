"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const volunteers_route_1 = require("./routes/volunteers.route");
const opportunities_route_1 = require("./routes/opportunities.route");
let app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/volunteers", volunteers_route_1.app);
app.use("/opportunities", opportunities_route_1.app);
app.get("/", (req, res) => {
    res.send("Hello mom!");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
