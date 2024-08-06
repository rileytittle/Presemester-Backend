export class Volunteer {
	firstName: string = "";
	lastName: string = "";
	userName: string = "";
	password: string = "";
	preferredCenters: string[] = [];
	skillsOrInterests: string[] = [];
	availabilityTimes: string[] = [];
	address: string = "";
	homePhoneNumber: number | undefined = undefined;
	workPhoneNumber: number | undefined = undefined;
	cellPhoneNumber: number | undefined = undefined;
	email: string = "";
	educationalBackground: string = "";
	currentLicenses: string[] = [];
	emergencyContactName: string = "";
	emergencyContactHomePhone: number | undefined = undefined;
	emergencyContactWorkPhone: number | undefined = undefined;
	emergencyContactEmail: string = "";
	emergencyContactAddress: string = "";
	driversLicenseOnFile: boolean = false;
	ssnOnFile: boolean = false;
	approvalStatus: boolean | undefined = undefined;
}
