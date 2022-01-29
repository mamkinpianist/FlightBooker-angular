import { Customer } from "./Customer";

export class Airport{
    constructor(
        public dateOfFlight:Date,
        public  from:number,
        public where:number,
        public companyName:string,
        public flightClass:string,
        public  numberOfSeats:number,
        public  departure:Date,
        public  arrival:Date,
        public customers:Customer[]=[],
        public id?:number,){}
}