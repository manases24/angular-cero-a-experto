import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class AfaService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Messi',
      team: 'Inter Miami CF',
    },
    { id: uuid(), name: 'Julian Alvarez', team: 'Manchester City' },
    { id: uuid(), name: 'Emiliano Martinez', team: 'Aston Villa' },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
