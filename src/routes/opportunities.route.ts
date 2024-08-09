import express from "express";
import { opportunity } from "../models/opportunity.model";
import { AuthChecker } from "../utils/auth.utils";

let app = express.Router();

let opportunitiesList: opportunity[]=[
	{
		name:'Senior Project',
		date:Date().toString(),
		center:'unf',
		info:'completing the senior project',
		volMatches:	[{
			firstName: "Riley",
			lastName: "Tittle",
			userName: "rtittle",
			password: "pass123",
			preferredCenters: ["Kitchen", "Dining Room", "Cleaning"],
			skillsOrInterests: ["OOP", "VSCode"],
			availabilityTimes: ["8:30-4:30", "", "8:30-4:30", "", "", "", ""],
			address: "1234 Address Cir, Jax FL 33333",
			homePhoneNumber: undefined,
			workPhoneNumber: undefined,
			cellPhoneNumber: 9041234567,
			email: "fakeemail@email.com",
			educationalBackground: "Most of a bachelor's degree",
			currentLicenses: ["Driver's license", "Florida food safe certified"],
			emergencyContactName: "Mom",
			emergencyContactHomePhone: 9041234567,
			emergencyContactWorkPhone: undefined,
			emergencyContactEmail: "momfakeemail@email.com",
			emergencyContactAddress: "1234 Nunya Ct, Jax FL 11111",
			driversLicenseOnFile: true,
			ssnOnFile: true,
			approvalStatus: true,
		},
		{
			firstName: "Hayden",
			lastName: "something",
			userName: "hsomething",
			password: "pass123",
			preferredCenters: ["Kitchen", "Dining Room", "Cleaning"],
			skillsOrInterests: ["OOP", "VSCode"],
			availabilityTimes: ["8:30-4:30", "", "8:30-4:30", "", "", "", ""],
			address: "1234 Address Cir, Jax FL 33333",
			homePhoneNumber: undefined,
			workPhoneNumber: undefined,
			cellPhoneNumber: 9041234567,
			email: "fakeemail@email.com",
			educationalBackground: "Most of a bachelor's degree",
			currentLicenses: ["Driver's license", "Florida food safe certified"],
			emergencyContactName: "Mom",
			emergencyContactHomePhone: 9041234567,
			emergencyContactWorkPhone: undefined,
			emergencyContactEmail: "momfakeemail@email.com",
			emergencyContactAddress: "1234 Nunya Ct, Jax FL 11111",
			driversLicenseOnFile: true,
			ssnOnFile: true,
			approvalStatus: true,
		},
		{
			firstName: "Corey",
			lastName: "something",
			userName: "csomething",
			password: "pass123",
			preferredCenters: ["Kitchen", "Dining Room", "Cleaning"],
			skillsOrInterests: ["OOP", "VSCode"],
			availabilityTimes: ["8:30-4:30", "", "8:30-4:30", "", "", "", ""],
			address: "1234 Address Cir, Jax FL 33333",
			homePhoneNumber: undefined,
			workPhoneNumber: undefined,
			cellPhoneNumber: 9041234567,
			email: "fakeemail@email.com",
			educationalBackground: "Most of a bachelor's degree",
			currentLicenses: ["Driver's license", "Florida food safe certified"],
			emergencyContactName: "Mom",
			emergencyContactHomePhone: 9041234567,
			emergencyContactWorkPhone: undefined,
			emergencyContactEmail: "momfakeemail@email.com",
			emergencyContactAddress: "1234 Nunya Ct, Jax FL 11111",
			driversLicenseOnFile: true,
			ssnOnFile: true,
			approvalStatus: true,
		}]
	}
]
//Create a new opportunity
app.post('/',AuthChecker, (req,res) =>{
	if(
		req.body.name &&
		req.body.center &&
		req.body.info
	){
		let name = req.body.name;
		let center = req.body.center;
		let info = req.body.info;
		let newOpportunity = new opportunity(name,center,info);
		opportunitiesList.push(newOpportunity);
		res.status(200).send({message:'New Opportunity Created'})
	}
	else{
		res.status(400).send({message:'Missing Required Attributes'})
	}
})
//Retrieve all Opportunities
app.get("/",AuthChecker, (req, res) => {

	res.status(200).send(opportunitiesList);
});

export { app };
