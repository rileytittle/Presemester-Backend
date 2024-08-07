"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volunteer = void 0;
class Volunteer {
    constructor(firstName, lastName, userName, password, preferredCenters, skillsOrInterests, availabilityTimes, address, email, educationalBackground, currentLicenses, emergencyContactName, emergencyContactEmail, emergencyContactAddress, driversLicenseOnFile, ssnOnFile, homePhoneNumber, workPhoneNumber, cellPhoneNumber, emergencyContactHomePhone, emergencyContactWorkPhone, approvalStatus) {
        this.lastName = "";
        this.userName = "";
        this.password = "";
        this.preferredCenters = [];
        this.skillsOrInterests = [];
        this.availabilityTimes = [];
        this.address = "";
        this.email = "";
        this.educationalBackground = "";
        this.currentLicenses = [];
        this.emergencyContactName = "";
        this.emergencyContactEmail = "";
        this.emergencyContactAddress = "";
        this.driversLicenseOnFile = false;
        this.ssnOnFile = false;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.preferredCenters = preferredCenters;
        this.skillsOrInterests = skillsOrInterests;
        this.availabilityTimes = availabilityTimes;
        this.address = address;
        this.email = email;
        this.educationalBackground = educationalBackground;
        this.currentLicenses = currentLicenses;
        this.emergencyContactName = emergencyContactName;
        this.emergencyContactEmail = emergencyContactEmail;
        this.emergencyContactAddress = emergencyContactAddress;
        this.driversLicenseOnFile = driversLicenseOnFile;
        this.ssnOnFile = ssnOnFile;
        this.homePhoneNumber = homePhoneNumber;
        this.workPhoneNumber = workPhoneNumber;
        this.cellPhoneNumber = cellPhoneNumber;
        this.emergencyContactHomePhone = emergencyContactHomePhone;
        this.emergencyContactWorkPhone = emergencyContactWorkPhone;
        this.approvalStatus = approvalStatus;
    }
}
exports.Volunteer = Volunteer;
