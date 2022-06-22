import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [   
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Clientes', url: '/custumers', icon: 'people' },
    { title: 'BarcodeScanner', url: '/barcode-scanner', icon: 'barcode' },
  ]; 
  constructor() {}
}
