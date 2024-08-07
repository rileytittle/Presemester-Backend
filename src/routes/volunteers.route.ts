import express from "express";
import { Volunteer } from "../models/volunteer.model";
import { AuthChecker } from "../utils/auth.utils";
let app = express.Router();

let volunteerList: Volunteer[] = [
	{
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
	},
];

app.post("/", AuthChecker, (req, res) => {
	if (
		req.body.firstName &&
		req.body.lastName &&
		req.body.username &&
		req.body.password &&
		req.body.preferredCenters &&
		req.body.skillsOrInterests &&
		req.body.availabilityTimes &&
		req.body.address &&
		req.body.cellPhoneNumber &&
		req.body.email &&
		req.body.emergencyContactName &&
		req.body.emergencyContactAddress &&
		req.body.emergencyContactEmail &&
		req.body.emergencyContactHomePhone
	) {
		let firstName = req.body.firstName;
		let lastName = req.body.lastName;
		let userName = req.body.userName;
		let password = req.body.password;
		let preferredCenters = req.body.preferredCenters;
		let skillsOrInterests = req.body.skillsOrInterests;
		let availabilityTimes = req.body.availabilityTimes;
		let address = req.body.address;
		let homePhoneNumber = req.body.homePhoneNumber;
		let workPhoneNumber = req.body.workPhoneNumber;
		let cellPhoneNumber = req.body.cellPhoneNumber;
		let email = req.body.email;
		let educationalBackground = req.body.educationalBackground;
		let currentLicenses = req.body.currentLicenses;
		let emergencyContactName = req.body.emergencyContactName;
		let emergencyContactHomePhone = req.body.emergencyContactHomePhone;
		let emergencyContactWorkPhone = req.body.emergencyContactWorkPhone;
		let emergencyContactEmail = req.body.emergencyContactEmail;
		let emergencyContactAddress = req.body.emergencyContactAddress;
		let driversLicenseOnFile = req.body.driversLicenseOnFile;
		let ssnOnFile = req.body.ssnOnFile;
		let approvalStatus = req.body.approvalStatus;
		let newVolunteer = new Volunteer(
			firstName,
			lastName,
			userName,
			password,
			preferredCenters,
			skillsOrInterests,
			availabilityTimes,
			address,
			email,
			educationalBackground,
			currentLicenses,
			emergencyContactName,
			emergencyContactEmail,
			emergencyContactAddress,
			driversLicenseOnFile,
			ssnOnFile,
			homePhoneNumber,
			workPhoneNumber,
			cellPhoneNumber,
			emergencyContactHomePhone,
			emergencyContactWorkPhone,
			approvalStatus
		);
		volunteerList.push(newVolunteer);
		res.status(200).send({ message: "New volunteer created" });
	} else {
		res.status(400).send({ message: "missing required attributes" });
	}
});

app.get("/:volunteerUserName", AuthChecker, (req, res) => {
	let foundVolunteer: Volunteer | undefined = undefined;
	for (let volunteer of volunteerList) {
		if (volunteer.userName === req.params.volunteerUserName) {
			foundVolunteer = volunteer;
			break;
		}
	}
	if (foundVolunteer) {
		res.status(200).send(foundVolunteer);
	} else {
		res.status(404).send({ message: "Volunteer not found" });
	}
});

app.get("/", AuthChecker, (req, res) => {
	res.status(200).send(volunteerList);
});

export { app };
