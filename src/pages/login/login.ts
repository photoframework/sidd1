import { Component,OnInit,ViewChild  } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
    @ViewChild(Slides) slides: Slides;
    loginForm: FormGroup; // Declare the loginForm 
 user:any;
    //Inject the formbuilder into the constructor
    constructor(private fb:FormBuilder) {}
     
    ngOnInit() {
        this.loginForm  = this.fb.group({
            username:['',[Validators.required]],
            password:['',[Validators.required]],
            
            
            // dob:['',[Validators.required]],

            // email:['',[Validators.required,
            //             Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            // password: this.fb.group({
            //     pwd: ['', [Validators.required, 
            //                Validators.minLength(8)]],
            //     confirmPwd: ['', [Validators.required,
            //                       Validators.minLength(8)]]
            // }),
            
            // gender: ['', Validators.required],
            // mobno:['',[Validators.required]],
             
           
            // terms: ['', Validators.requiredTrue]
        })
    
         
    }
    slideChanged() {
        let currentIndex = this.slides.slideNext()
        console.log('Current index is', currentIndex);
      }
  
    public onFormSubmit() {
        if(this.loginForm.valid) {
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
