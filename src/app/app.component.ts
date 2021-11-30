import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data = [
    { first: 'Max', last: 'Verstappen' },
    { first: 'Fernando', last: 'Alonso' },
    { first: 'Mick', last: 'Schumacher' },
    { first: 'Lewis', last: 'Hamilton' },
    { first: 'Sergio', last: 'Perez' },
  ];
}
