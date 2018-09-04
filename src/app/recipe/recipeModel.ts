export class recipeModel {
    constructor(
    public name:string,
    public username:string,
    public company:string,
    public email:string,
    public address:Address
    ){}
 
 }
 export class Address {
     constructor(
     public street:string,
     public city:string,
     public zipcode:string,
     ){}
 }
 
 export class UserList {
     public data:any[];
     public id:number;
     public first_name:string;
     public last_name:string;
     public avatar:string;
     public total:any;
     public page:any;
     public total_pages:any

 }

// export class recipeModel {
//    public imageURL:string;
//    public name:string;
//    public ingredients:Ingredients;
//    public steps:any
// }
// export class Ingredients {
//     public name:string;
//     public quantity:string;
//     public type:string;
// }

