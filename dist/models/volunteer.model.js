"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volunteer = void 0;
class Volunteer {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.userName = "";
        this.password = "";
        this.preferredCenters = [];
        this.skillsOrInterests = [];
        this.availabilityTimes = [];
        this.address = "";
        this.homePhoneNumber = undefined;
        this.workPhoneNumber = undefined;
        this.cellPhoneNumber = undefined;
        this.email = "";
        this.educationalBackground = "";
        this.currentLicenses = [];
        this.emergencyContactName = "";
        this.emergencyContactHomePhone = undefined;
        this.emergencyContactWorkPhone = undefined;
        this.emergencyContactEmail = "";
        this.emergencyContactAddress = "";
        this.driversLicenseOnFile = false;
        this.ssnOnFile = false;
        this.approvalStatus = undefined;
    }
}
exports.Volunteer = Volunteer;
