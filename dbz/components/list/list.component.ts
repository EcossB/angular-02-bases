import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterEmitter(id: string) {

    this.onDeleteCharacter.emit(id);
  }


}
