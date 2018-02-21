import { Component, OnInit } from '@angular/core';
import { CartoonCharacter } from '../cartoon-character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: CartoonCharacter[];
  selected: CartoonCharacter; 

  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
    this.getCharacters();
  }

  onSelect(character: CartoonCharacter): void {
    this.selected = character;
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

}
