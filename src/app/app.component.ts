import { Component } from '@angular/core';

import { CartoonCharacter } from './cartoon-character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Flintstones';

  constructor() {}

  ngOnInit() {
  }

}