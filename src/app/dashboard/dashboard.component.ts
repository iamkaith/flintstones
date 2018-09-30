import { Component, OnInit } from '@angular/core';
import { CartoonCharacter } from '../model/cartoon-character';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  characters: CartoonCharacter[] = [];
  
  constructor(private cartoonService: CharacterService) { }
  
  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() : void {
    this.cartoonService.getCharacters()
      .subscribe(results => this.characters = results.slice(0, 4));
  }

}
