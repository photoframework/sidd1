import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';


@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {

  barcodeScannerOptions: BarcodeScannerOptions;
  qrData=null;
  ScannedCode=null;
  CreatedCode=null;

  barcodeData=null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

  createQRCode() {
    this.CreatedCode= this.qrData;
  }

  scnQRCode(){
    this.barcodeScannerOptions = {
      // preferFrontCamera: true,
      showTorchButton: true,
      prompt: 'Please scan your code',
      torchOn: true
    }
    
    this.barcodeScanner.scan(this.barcodeScannerOptions).then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.ScannedCode = barcodeData;
      this.qrData=barcodeData.text;
    }, (err) => {
      // An error occurred
      console.log(err);
    });
  }

}
