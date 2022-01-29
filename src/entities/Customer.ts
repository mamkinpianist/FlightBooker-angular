export class Customer{
    constructor(
        public name:string,
        public surname:string,
        public dateOfBirth:Date,
        public gender:string,
        public phoneNumber:number,
        public adress:string,
        public id?:number,
    ){}
}