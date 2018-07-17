import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'intrPlace';
  lat: number = 48.1233436;
  lng: number = 11.5904846;
}
