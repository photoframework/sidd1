import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import{ SignUpPage } from '../signup/signup';
import { LoginPage  } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Nav) nav: Nav;

  constructor(
    public navCtrl: NavController,
  ) { }

  pushSignUpPage() {
 
    this.navCtrl.push(SignUpPage);
  }
  pushLoginPage() {
 
    this.navCtrl.push(LoginPage);
  }

}
