"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const opportunity_model_1 = require("../models/opportunity.model");
const auth_utils_1 = require("../utils/auth.utils");
let app = express_1.default.Router();
exports.app = app;
let opportunitiesList = [
    {
        name: 'Senior Project',
        date: Date().toString(),
        center: 'unf',
        info: 'completing the senior project',
        volMatches: [{
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
];
//delete opportunity with the provided name
app.delete("/:opportunityName", auth_utils_1.AuthChecker, (req, res) => {
    let newList = [];
    for (let opportunity of opportunitiesList) {
        if (opportunity.name === req.params.opportunityName) {
            newList = opportunitiesList.filter((opportunity) => opportunity.name !== req.params.opportunityName);
            opportunitiesList = newList;
            break;
        }
    }
    if (newList.length === 0) {
        res.status(400).send({ message: "Opportunity Not Found" });
    }
    else {
        res.status(200).send({ message: "Opportunity Deleted" });
    }
});
//Edit Opportunity
app.patch(':/opportunityName', auth_utils_1.AuthChecker, (req, res) => {
    let foundOpportunity = undefined;
    for (let opportunity of opportunitiesList) {
        if (opportunity.name = req.params.opportunityName) {
            foundOpportunity = opportunity;
            break;
        }
    }
    if (foundOpportunity) {
        if (req.body.name) {
            foundOpportunity.name = req.body.name;
        }
        if (req.body.center) {
            foundOpportunity.center = req.body.name;
        }
        if (req.body.date) {
            foundOpportunity.date = req.body.date;
        }
        if (req.body.info) {
            foundOpportunity.info = req.body.info;
        }
        res.status(200).send({ message: 'Opportunity Updated Successfully' });
    }
    else {
        res.status(400).send({ message: 'Opportunity Not Found' });
    }
});
//Create a new opportunity
app.post('/', auth_utils_1.AuthChecker, (req, res) => {
    if (req.body.name &&
        req.body.center &&
        req.body.info) {
        let name = req.body.name;
        let center = req.body.center;
        let info = req.body.info;
        let newOpportunity = new opportunity_model_1.opportunity(name, center, info);
        opportunitiesList.push(newOpportunity);
        res.status(200).send({ message: 'New Opportunity Created' });
    }
    else {
        res.status(400).send({ message: 'Missing Required Attributes' });
    }
});
//search opportunites
app.get("/:searchTerm", auth_utils_1.AuthChecker, (req, res) => {
    let foundOpportunities = [];
    //returning any opportunites with the search term in their name
    for (let opportunity of opportunitiesList) {
        if (opportunity.name.includes(req.params.searchTerm)) {
            foundOpportunities.push(opportunity);
        }
    }
    if (foundOpportunities.length >= 1) {
        res.status(200).send(foundOpportunities);
    }
    else {
        res.status(404).send({ message: "No Matching Opportunites Found" });
    }
});
//Retrieve all Opportunities
app.get("/", auth_utils_1.AuthChecker, (req, res) => {
    res.status(200).send(opportunitiesList);
});
