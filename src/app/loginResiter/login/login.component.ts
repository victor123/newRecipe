import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { AuthService } from "../authService/AuthService";


@Component({
    selector:'login-component',
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
message:string;
errorMessage:boolean;

LoginForm:FormGroup;
constructor(
    private _router:Router,
    private fb:FormBuilder,
    private _auth:AuthService) {}

onSubmit(form){
    this._auth.userLogin(form).subscribe(
        (res) => {
            console.log(res.token)
            localStorage.setItem('token',res.token);
           this._router.navigate(['/recipe'])
        },
        (error) =>{
            this.errorMessage = true;
            this.message = "Your username or password is incorrect"
        }
    )
   
}

    ngOnInit(){
        this.LoginForm = this.fb.group({
            email:['',Validators.required],
            password:['',Validators.required]
            
        })
        
    }

}