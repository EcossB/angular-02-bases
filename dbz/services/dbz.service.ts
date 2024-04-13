import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root' // esta propiedad hara un singleton en toda la app.
}) // injectable es un decorador que tratara esta clase como un servicio.
export class dbzService {


  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character): void {

    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: number) {
    this.characters.splice(id, 1);
  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter((ch) => ch.id !== id);
  }

}
