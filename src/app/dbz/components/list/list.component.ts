import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  // onDelete, debeemitir el index value.
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeletCharacter(id?: string): void {
    //Emitimos el index, uuid
    this.onDelete.emit(id);

  }
}
