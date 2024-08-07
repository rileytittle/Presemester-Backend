export class Volunteer {
	firstName: string;
	lastName: string = "";
	userName: string = "";
	password: string = "";
	preferredCenters: string[] = [];
	skillsOrInterests: string[] = [];
	availabilityTimes: string[] = [];
	address: string = "";
	homePhoneNumber?: number;
	workPhoneNumber?: number;
	cellPhoneNumber?: number;
	email: string = "";
	educationalBackground: string = "";
	currentLicenses: string[] = [];
	emergencyContactName: string = "";
	emergencyContactHomePhone?: number;
	emergencyContactWorkPhone?: number;
	emergencyContactEmail: string = "";
	emergencyContactAddress: string = "";
	driversLicenseOnFile: boolean = false;
	ssnOnFile: boolean = false;
	approvalStatus?: boolean;

	constructor(
		firstName: string,
		lastName: string,
		userName: string,
		password: string,
		preferredCenters: string[],
		skillsOrInterests: string[],
		availabilityTimes: string[],
		address: string,
		email: string,
		educationalBackground: string,
		currentLicenses: string[],
		emergencyContactName: string,
		emergencyContactEmail: string,
		emergencyContactAddress: string,
		driversLicenseOnFile: boolean,
		ssnOnFile: boolean,
		homePhoneNumber?: number,
		workPhoneNumber?: number,
		cellPhoneNumber?: number,
		emergencyContactHomePhone?: number,
		emergencyContactWorkPhone?: number,
		approvalStatus?: boolean
	) {
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
