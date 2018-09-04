

export class budget {
    public data:any[];
    public exp:Expense[];
    public inc:Income[];
    public total:Total[];
    public budget:any;
    public percentage:any

}

export class Expense {
    public id:any;
    public description:any;
    public value:any;
    public percentage:any
}

export class Income {
    public id:any;
    public description:any;
    public value:any;
    public percentage:any
}

export class Total {
    public exp:any;
    public inc:any
}