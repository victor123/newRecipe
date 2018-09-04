import { ViewChild, Component, OnInit } from "@angular/core";
import { BudgetService } from "./Budget.service";
import { NgForm } from "@angular/forms";

//import {FormBuilder,FormGroup,Validators} from "@angular/forms";

@Component({
    selector: "tab-section",
    templateUrl: './tabs.html',
    styles: [`
    .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
      .percen {
        font-size: 14px;
        display: inline-block;
        top: -4px;
        position: relative;
        padding: 5px;
        background: #e03b51;
        color: #fff;
        border-radius: 5px;
      }
      .col-md-4.ad-padMar {
        padding: 15px 0 0;
        min-height: 106px;
        color: #fff;
        margin-bottom:35px;
    }
    .blue{
        background:#0da3d2;
    }
    .green{
        background:#28B9B5;
    }
    .red{
        background:#ff4f66;
    }
    .list-row {
        width: 100%;
        float: left;
        padding: 12px 0;
        font-size: 16px;
        border: 1px solid #ddd;
        margin-top: -1px;
    }
    .delIcon {
        color:#d84c5e
    }
    .g-txt {
        color:#28B9B5
    }
    .r-txt{
        color: #e13b52
    }
      `]
})

export class TabSection implements OnInit {
    @ViewChild('f') submitFm: NgForm
    type = "inc";
    viewMode = 'tab1'
    dataList;
    addItems;
    constructor(private _budgetService: BudgetService) { }

    fetchData() {
        this._budgetService.budgetFetchData().subscribe(
            (data) => {

                this.dataList = data.data;
                console.log(this.dataList)
            }
        )
    }
    submitForm() {
        this.listMethod();
        this.submitFm.reset();
    }

    listMethod() {
        var form = this.submitFm.value;
        this.setValue(form);
        this.totalEI('exp');
        this.totalEI('inc');
        this.budgetAdd(this.dataList);
    }

    budgetAdd(type) {
        var bugetTotal = type.total.inc - type.total.exp;
        if (type.total.inc > 0) {
            var perCen = Math.round((type.total.exp / type.total.inc) * 100);
            type.percentage = perCen;

        } else {
            type.percentage = 0;
        }
        type.budget = bugetTotal;

    }

    setValue(form) {
        var Expense = this.dataList.addItem.exp;
        var Income = this.dataList.addItem.inc;

        if (form.type == 'exp') {
            delete form.type;
            Expense.push(form)
        } else if (form.type == 'inc') {
            delete form.type;
            Income.push(form);
        }
    }

    totalEI(type: any) {
        var sum = 0;
        this.dataList.addItem[type].forEach(function (cur) {
            sum += cur.value
        })
        this.dataList.total[type] = sum;
    }

    deleteItem(index) {
        this.dataList.addItem.inc.splice(index, 1);
        this.listMethod();
    }

    deleteItem2(index) {
        this.dataList.addItem.exp.splice(index, 1);
        this.listMethod();
    }

    ngOnInit() {
        this.fetchData();
    }
}