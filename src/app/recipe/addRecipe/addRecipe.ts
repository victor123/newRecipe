import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
    selector: 'addRecipe',
    templateUrl: './addRecipe.html'
})
export class AddRecipe implements OnInit {
    formvalue:any[]=[];
    myForm:FormGroup;

    constructor(private fb: FormBuilder) {
       
    }
   
    onSubmit(form) {
       this.formvalue.splice(0,0,form);
       // this.formvalue.push(form)
        this.myForm.reset()
        
        // if server failed 
        // (error) => { this.formvalue.splice(0,1)}
    }

    deleteList(id){
        let index = this.formvalue.indexOf(id);
        this.formvalue.splice(index, 1);

        // this.deleteService.subscribe(
        //     null,
        //     (error) => {
        //         this.formvalue.splice(index ,0,id);
        //     }
        // )

    }

    reset() {
        this.myForm.reset()
    }

    ngOnInit() {
        this.myForm = this.fb.group({
            first_name: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
            last_name: ['', Validators.required],
            avatar: ['', Validators.required]
        })
    }

}