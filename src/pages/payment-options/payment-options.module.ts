import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentOptionsPage } from './payment-options';

@NgModule({
  declarations: [
    PaymentOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentOptionsPage),
  ],
})
export class PaymentOptionsPageModule {}