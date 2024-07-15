import { Component } from '@angular/core';
import { AfaService } from '../services/afa.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-afa-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // constructor(private afaService: AfaService) {}
  // get characters(): Character[] {
  //   return [...this.afaService.characters];
  // }
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
    {
      name: 'Javier Mascherano',
      team: 'DT Seleccion ARG sub-23',
    },
    {
      name: 'Dibu Martinez',
      team: 'Aston Villa',
    },
    { name: 'Alexis Mac Allister', team: 'Liverpool FC' },
  ];
}
