import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-afa-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public characters: Character[] = [
    {
      name: 'Messi',
      team: 'Inter Miami CF',
    },
    {
      name: 'Garnacho',
      team: 'Manchester United',
    },
    {
      name: 'Julian Alvarez',
      team: 'Manchester City',
    },
  ];
}
