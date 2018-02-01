import { Component,OnInit,ViewChild  } from '@angular/core';
import { NavController,Slides  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'signup',
  templateUrl: 'signup.html'
})
export class SignUpPage implements OnInit {
    @ViewChild(Slides) slides: Slides;
    signupForm: FormGroup; // Declare the signupForm 
 user:any;
    //Inject the formbuilder into the constructor
    constructor(private fb:FormBuilder) {}
     
    ngOnInit() {
        this.signupForm  = this.fb.group({
            fname:['',[Validators.required]],
            lname:['',[Validators.required]],
            dob:['',[Validators.required]],

            email:['',[Validators.required,Validators.email]],
            // password: this.fb.group({
            //     pwd: ['', [Validators.required, 
            //                Validators.minLength(8)]],
            //     confirmPwd: ['', [Validators.required,
            //                       Validators.minLength(8)]]
            // }),
            
            // gender: ['', Validators.required],
            // mobno:['',[Validators.required]],
            mobno:['',[Validators.required,
                    Validators.pattern("[0-9]*"),
                    Validators.maxLength(10),
                    Validators.minLength(10)]],
             
            password:['',[Validators.required,
                        Validators.minLength(8)]]
            // terms: ['', Validators.requiredTrue]
        })
    
         
    }
    slideChanged() {
        let currentIndex = this.slides.slideNext()
        console.log('Current index is', currentIndex);
      }
  
    public onFormSubmit() {
        if(this.signupForm.valid) {
            this.user = this.signupForm.value;
            console.log(this.user);
            /* Any API call logic via services goes here */
        }

        
    }
    get mobno() {
        return this.signupForm.get('mobno');
    }
    get password() {
        return this.signupForm.get('password');
    }
// CustId:number;
// FName:string;
// LName:string;
// Dob:Date;
// Email:string;
// MobNo:number;



  
}
