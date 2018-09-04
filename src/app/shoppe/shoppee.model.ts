

export class shopee {
    public userId: number;
    public id: number;
    public name: string;
    public email: string;
    public phone:string;
    public website:string;
    public company:Company[];
    public address: Address[];
   
}

export class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo:Geo[];
}

export class Geo {
    lan:number;
    lat:number
}

export class Company {
    public name:string;
    public catchPhrase:string;
    public bs:string;

}