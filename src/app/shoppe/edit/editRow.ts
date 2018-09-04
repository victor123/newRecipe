import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from "../../service/product.service";
import { shopee } from "../shoppee.model";

@Component({
    selector: "edit-row",
    templateUrl: './editRow.html'
})

export class EditRow implements OnInit {
    EditForm: FormGroup;
    @Input() users:shopee;
    constructor(private fb: FormBuilder, private _service: ProductService) { }


    ngOnInit() {
        this.EditForm = this.fb.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: [''],
            address: this.fb.group({
                street: [''],
                suite: [''],
                city: [''],
                zipcode: ['', Validators.required],
                geo: this.fb.group({
                    lat: [''],
                    lng: [''],
                }),
            }),
           
            phone: ['',[Validators.pattern('-?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?')]],
            website: [''],
            company: this.fb.group({
                name: [''],
                catchPhrase: [''],
                bs: ['', Validators.required]
            })

        })

    }
    
    onSubmit(even) {
        console.log(even)
        // this._service.create(even).subscribe(
        //     (res) => {
        //         console.log(res)
        //     }
        // )
    }

}