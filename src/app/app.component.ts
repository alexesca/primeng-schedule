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
      title: 'Event 1',
      start: '2018-09-01'
    }
  ]
}
