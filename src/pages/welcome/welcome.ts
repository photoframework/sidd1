import { Component, OnInit,ViewChild } from '@angular/core';
import { IonicPage, Slides } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Nav, Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

// import { NavController,Slides  } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements OnInit {

  @ViewChild(Slides) slides: Slides;
    loginForm: FormGroup; // Declare the loginForm 
 user:any;
    //Inject the formbuilder into the constructor
    constructor(private fb:FormBuilder) {}
     
    ngOnInit() {

    }

  
    slideChanged() {
      let currentIndex = this.slides.slideNext()
      console.log('Current index is', currentIndex);
    }


  
}
