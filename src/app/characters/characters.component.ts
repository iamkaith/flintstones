// External 
import { Component, OnInit } from '@angular/core';

// Internal
import { CartoonCharacter } from '../model/cartoon-character';
import { CharacterService } from '../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: CartoonCharacter[];
  selected: CartoonCharacter; 

  constructor( 
    private characterService: CharacterService,
    private router: Router
   ) { }

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

  deleteCharacter(delCharacter: CartoonCharacter): void {
    this.characterService.deleteCharacter(delCharacter.PersonId)
      .subscribe( () => {
          this.characters = this.characters.filter(c => c !== delCharacter);
          if (this.selected === delCharacter) { this.selected = null; }
        }
      );
  }

  newCharacter: CartoonCharacter = new CartoonCharacter();
  
  addCharacter(newCartoonCharacter: CartoonCharacter): void {
  
  newCartoonCharacter.FirstName = newCartoonCharacter.FirstName.trim();
  newCartoonCharacter.LastName = newCartoonCharacter.LastName.trim();
  newCartoonCharacter.Occupation = newCartoonCharacter.Occupation.trim();
  newCartoonCharacter.Gender = newCartoonCharacter.Gender.trim();
  newCartoonCharacter.Picture = newCartoonCharacter.Picture.trim();
  
  if (!newCartoonCharacter) { 
    return; 
  } else {
    this.characterService.createCharacter(newCartoonCharacter)
    .subscribe(newCartoonCharacter => {
      this.selected = null; 
      this.router.navigate(['./dashoard'])});
    }  
  }

}
