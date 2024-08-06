import express from "express";
import { app as VolunteerRouter } from "./routes/volunteers.route";
import { app as OpportunitiesRouter } from "./routes/opportunities.route";
let app = express();
app.use(express.json());

app.use("/volunteers", VolunteerRouter);
app.use("/opportunities", OpportunitiesRouter);
app.get("/", (req, res) => {
	res.send("Hello mom!");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
