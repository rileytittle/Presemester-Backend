import { Volunteer } from "./volunteer.model";

export class opportunity{
    name: string = '';
    date: string;
    center: string;
    info: string = '';
    volMatches: Volunteer[] = [];

    constructor(name:string,center:string,info:string ){
        this.name = name;
        this.date = Date().toString();
        this.center = center;
        this.info = info;

    }
    

}
