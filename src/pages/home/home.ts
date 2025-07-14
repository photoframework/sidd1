import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import{ SignUpPage } from '../signup/signup';
import { LoginPage  } from '../login/login';
import { PaymentOptionsPage } from '../payment-options/payment-options';

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

  pushPaymentOptionsPage() {
    this.navCtrl.push(PaymentOptionsPage, {
      amount: 148,
      itemCount: 1
    });
  }

}
