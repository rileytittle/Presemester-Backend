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
//Retrieve all Opportunities
app.get("/", auth_utils_1.AuthChecker, (req, res) => {
    res.status(200).send(opportunitiesList);
});
