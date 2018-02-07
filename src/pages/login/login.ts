import { Component,OnInit,ViewChild  } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { NgForm } from '@angular/forms';





@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
    // @ViewChild(Slides) slides: Slides;
    loginForm: FormGroup; // Declare the loginForm 
    user:any;
    username: ''; password: '';
    submitted = false;
    //Inject the formbuilder into the constructor
    constructor(private fb:FormBuilder) {}
     
    ngOnInit() {
        this.loginForm  = this.fb.group({
            username:['',[Validators.required]],
            password:['',[Validators.required]],
            })
        }

    public onFormSubmit() {
        if(this.loginForm.valid) {
            this.submitted = true;;
            this.user = this.loginForm.value;
            console.log(this.user);
            /* Any API call logic via services goes here */
        }
    }
// CustId:number;
// FName:string;
// LName:string;
// Dob:Date;
// Email:string;
// MobNo:number;



  
}
