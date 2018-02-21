import { Injectable } from '@angular/core';
import { CartoonCharacter } from './cartoon-character';
import { CHARACTERS } from './data/dummy-data';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CharacterService {

  private BASE_URL = "http://flintstones.zift.ca/api/flintstones"; 
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor( private http: Http ) { }

  /*

  // initial promise based structure

  getCharacters(): Promise<CartoonCharacter[]> {
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as CartoonCharacter[])
     .catch(this.handleError);
  }
  
  getCharacter(id: number): Promise<CartoonCharacter>{
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as CartoonCharacter[])
     .catch(this.handleError);
  }
  */
  
  getCharacters(): Observable<CartoonCharacter[]> {
    return this.http.get(this.BASE_URL)
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || `Server error, can't get characters`)); 
  }   

  // CRUD OPERATIONS

  createCharacter(character: CartoonCharacter): Observable<CartoonCharacter> {
    let url = `${this.BASE_URL}`;
    
    return this.http.post(url, JSON.stringify(character), {headers: this.headers} )
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || 'Adding new character error')); 
  }

  getCharacter(id: number): Observable<CartoonCharacter> {
    return of(CHARACTERS.find(character => character.PersonId === id ));
  }

  updateCharacter(character: CartoonCharacter): Observable<CartoonCharacter> {   
    let url = `${this.BASE_URL}/${character.PersonId}`;

    return this.http.put(url, JSON.stringify(character), {headers: this.headers} )
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || `Update character error on id:${character.PersonId}`)); 

  } 

  deleteCharacter(id: number): Observable<CartoonCharacter> {
    let url = `${this.BASE_URL}/${id}`;

    return this.http.delete(url)
      .map((res: Response) => res.json())
      .catch((error :any) => Observable.throw(error.json().error || `Deleting character error on id:${id}`)); 
  }

}
