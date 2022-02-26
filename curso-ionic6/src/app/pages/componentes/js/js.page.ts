import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js',
  templateUrl: './js.page.html',
  styleUrls: ['./js.page.scss'],
})
export class JsPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
