// Internal
import { Component } from '@angular/core';

// External
import { CartoonCharacter } from './model/cartoon-character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Flintstones';

  selected: CartoonCharacter;

  constructor() {}

  ngOnInit() {
  }

}