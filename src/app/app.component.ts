import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'schedule';
  events = [
    {
      vin: 13,
      year: 1232,
      brand: 123213,
      color: 123213
    }
  ]
}
