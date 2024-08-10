"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const volunteer_model_1 = require("../models/volunteer.model");
const auth_utils_1 = require("../utils/auth.utils");
let app = express_1.default.Router();
exports.app = app;
let volunteerList = [
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
app.patch("/:volunteerUserName", auth_utils_1.AuthChecker, (req, res) => {
    let foundVolunteer = undefined;
    for (let volunteer of volunteerList) {
        if (volunteer.userName === req.params.volunteerUserName) {
            foundVolunteer = volunteer;
            break;
        }
    }
    if (foundVolunteer) {
        if (req.body.firstName) {
            foundVolunteer.firstName = req.body.firstName;
        }
        if (req.body.lastName) {
            foundVolunteer.lastName = req.body.lastName;
        }
        if (req.body.userName) {
            foundVolunteer.userName = req.body.userName;
        }
        if (req.body.password) {
            foundVolunteer.password = req.body.password;
        }
        if (req.body.preferredCenters) {
            foundVolunteer.preferredCenters = req.body.preferredCenters;
        }
        if (req.body.skillsOrInterests) {
            foundVolunteer.skillsOrInterests = req.body.skillsOrInterests;
        }
        if (req.body.availabilityTimes) {
            foundVolunteer.availabilityTimes = req.body.availabilityTimes;
        }
        if (req.body.address) {
            foundVolunteer.address = req.body.address;
        }
        if (req.body.cellPhoneNumber) {
            foundVolunteer.cellPhoneNumber = parseInt(req.body.cellPhoneNumber);
        }
        if (req.body.homePhoneNumber) {
            foundVolunteer.homePhoneNumber = parseInt(req.body.homePhoneNumber);
        }
        if (req.body.workPhoneNumber) {
            foundVolunteer.workPhoneNumber = parseInt(req.body.workPhoneNumber);
        }
        if (req.body.email) {
            foundVolunteer.email = req.body.email;
        }
        if (req.body.educationalBackground) {
            foundVolunteer.educationalBackground =
                req.body.educationalBackground;
        }
        if (req.body.currentLicenses) {
            foundVolunteer.currentLicenses = req.body.currentLicenses;
        }
        if (req.body.emergencyContactName) {
            foundVolunteer.emergencyContactName = req.body.emergencyContactName;
        }
        if (req.body.emergencyContactHomePhone) {
            foundVolunteer.emergencyContactHomePhone = parseInt(req.body.emergencyContactHomePhone);
        }
        if (req.body.emergencyContactWorkPhone) {
            foundVolunteer.emergencyContactWorkPhone = parseInt(req.body.emergencyContactWorkPhone);
        }
        if (req.body.emergencyContactEmail) {
            foundVolunteer.emergencyContactEmail =
                req.body.emergencyContactEmail;
        }
        if (req.body.emergencyContactAddress) {
            foundVolunteer.emergencyContactAddress =
                req.body.emergencyContactAddress;
        }
        if ("driversLicenseOnFile" in req.body) {
            foundVolunteer.driversLicenseOnFile = req.body.driversLicenseOnFile;
        }
        if ("ssnOnFile" in req.body) {
            foundVolunteer.ssnOnFile = req.body.ssnOnFile;
        }
        if ("approvalStatus" in req.body) {
            foundVolunteer.approvalStatus = req.body.approvalStatus;
        }
        res.status(200).send({ message: "Volunteer updated successfully" });
    }
    else {
        res.status(404).send({ message: "Volunteer not found" });
    }
});
app.post("/", auth_utils_1.AuthChecker, (req, res) => {
    if (req.body.firstName &&
        req.body.lastName &&
        req.body.userName &&
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
        req.body.emergencyContactHomePhone) {
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
        let newVolunteer = new volunteer_model_1.Volunteer(firstName, lastName, userName, password, preferredCenters, skillsOrInterests, availabilityTimes, address, email, educationalBackground, currentLicenses, emergencyContactName, emergencyContactEmail, emergencyContactAddress, driversLicenseOnFile, ssnOnFile, homePhoneNumber, workPhoneNumber, cellPhoneNumber, emergencyContactHomePhone, emergencyContactWorkPhone, approvalStatus);
        volunteerList.push(newVolunteer);
        res.status(200).send({ message: "New volunteer created" });
    }
    else {
        res.status(400).send({ message: "missing required attributes" });
    }
});
app.delete("/:volunteerUserName", auth_utils_1.AuthChecker, (req, res) => {
    let newList = [];
    for (let volunteer of volunteerList) {
        if (volunteer.userName === req.params.volunteerUserName) {
            newList = volunteerList.filter((volunteer) => volunteer.userName !== req.params.volunteerUserName);
            volunteerList = newList;
            break;
        }
    }
    if (newList.length === 0) {
        res.status(400).send({ message: "volunteer not found" });
    }
    else {
        res.status(200).send({ message: "Volunteer deleted" });
    }
});
app.get("/:volunteerUserName", auth_utils_1.AuthChecker, (req, res) => {
    let foundVolunteer = undefined;
    for (let volunteer of volunteerList) {
        if (volunteer.userName === req.params.volunteerUserName) {
            foundVolunteer = volunteer;
            break;
        }
    }
    if (foundVolunteer) {
        res.status(200).send(foundVolunteer);
    }
    else {
        res.status(404).send({ message: "Volunteer not found" });
    }
});
app.get("/", auth_utils_1.AuthChecker, (req, res) => {
    res.status(200).send(volunteerList);
});
