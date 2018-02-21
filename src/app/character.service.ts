import { Injectable } from '@angular/core';
import { CartoonCharacter } from './cartoon-character';
import { CHARACTERS } from './data/dummy-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {

  private BASE_URL = "http://flintstones.zift.ca/api/flintstones"; 

  constructor( ) { }

  /*
  getCharacters(): Promise<CartoonCharacter[]> {
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as CartoonCharacter[])
     .catch(this.handleError);
  }
  */

  
  getCharacters(): Observable<CartoonCharacter[]> {
    return of(CHARACTERS) ;
  }
  
  /*
  getCharacter(id: number): Promise<CartoonCharacter>{
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as CartoonCharacter[])
     .catch(this.handleError);
  }
  */

  getCharacter(id: number): Observable<CartoonCharacter> {
    return of(CHARACTERS.find(character => character.PersonId === id ));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
