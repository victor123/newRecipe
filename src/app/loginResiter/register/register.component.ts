import { Component, OnInit } from "@angular/core";
import {Router } from '@angular/router';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { AuthService } from "../authService/AuthService";

@Component({
    selector:'register-component',
    templateUrl:'./register.component.html'
})

export class RegisterComponent implements OnInit{
RegisterForm:FormGroup;

constructor(
    private fb:FormBuilder,
    private _route:Router, 
    private _auth:AuthService
){}

register(frm)
{
    
    this._auth.userRegister(frm).subscribe(
        (res) => {
            localStorage.setItem('token',res.token);
            this._route.navigate(['/recipe'])
        }
    )
//  this._auth.userRegister(frm).subscribe(
//      (res) => {
//          localStorage.setItem('token',res.token)
//          this._route.navigate(['/shopping']);

//          console.log(res)
//      }
     
//  )

}
    ngOnInit(){
        this.RegisterForm = this.fb.group({
            username:['',[Validators.required,Validators.maxLength(25),Validators.minLength(3)]],

            password:['',[Validators.required,Validators.minLength(6)]],
            confirmpassword:['',[Validators.required,Validators.minLength(6)]],
            email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]]
            
        },
        {validator: this.passwordMatchValidator}
    
     )
    }
   
    passwordMatchValidator(frm:FormGroup) {
        return frm.controls['password'].value === frm.controls['confirmpassword'].value ? null:{'mismatch':true}
    }
}