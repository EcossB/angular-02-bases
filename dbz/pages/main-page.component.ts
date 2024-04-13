import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private _dbzService: dbzService // esto habilita toda la info que hay en ese servicio.
  ) { }

  get characters(): Character[]{
    return [...this._dbzService.characters]; // expresion de puntos para darme una copia.
  }

  onDeleteCharacter(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character): void {
    this._dbzService.addCharacter(character);
  }


}
