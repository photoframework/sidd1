import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-payment-options',
  templateUrl: 'payment-options.html',
})
export class PaymentOptionsPage {

  paymentAmount: number = 148;
  itemCount: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Get payment details from navigation parameters if provided
    this.paymentAmount = navParams.get('amount') || 148;
    this.itemCount = navParams.get('itemCount') || 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentOptionsPage');
  }

  // Handle payment option selection
  selectPaymentOption(method: string) {
    console.log('Selected payment method:', method);
    
    switch(method) {
      case 'paytm':
        this.payWithPaytm();
        break;
      case 'phonepe':
        this.linkAccount('PhonePe');
        break;
      case 'amazon':
        this.linkAccount('Amazon Pay');
        break;
      case 'freecharge':
        this.linkAccount('Freecharge');
        break;
      case 'mobikwik':
        this.linkAccount('Mobikwik');
        break;
      case 'sodexo':
        this.linkAccount('Sodexo');
        break;
      case 'add-card':
        this.addNewCard();
        break;
      default:
        console.log('Unknown payment method');
    }
  }

  // Handle Paytm payment
  payWithPaytm() {
    console.log('Processing payment with Paytm...');
    // Add payment processing logic here
    // Example: Navigate to payment confirmation or call payment API
  }

  // Handle account linking
  linkAccount(provider: string) {
    console.log(`Linking account for ${provider}...`);
    // Add account linking logic here
    // Example: Open external app or navigate to linking page
  }

  // Handle add new card
  addNewCard() {
    console.log('Adding new card...');
    // Add card addition logic here
    // Example: Navigate to card input form
  }

  // Go back to previous page
  goBack() {
    this.navCtrl.pop();
  }
}