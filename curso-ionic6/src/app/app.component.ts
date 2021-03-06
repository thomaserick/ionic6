import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Alert', url: 'alert', icon: 'alert' },
    { title: 'Botão', url: 'button', icon: 'dice' },
    { title: 'Card', url: 'card', icon: 'card' },
    { title: 'Tags', url: 'tags', icon: 'dice' },
    { title: 'JS', url: 'js', icon: 'dice' },
  ];

  public menuNativeCollection = [
    {
      title: 'Camera',
      url: 'camera',
      icon: 'camera',
    },
    {
      title: 'Flash',
      url: 'flash',
      icon: 'flash',
    },
  ];
  constructor() {}
}
