"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
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
];
app.get("/", auth_utils_1.AuthChecker, (req, res) => {
    res.status(200).send(volunteerList);
});
