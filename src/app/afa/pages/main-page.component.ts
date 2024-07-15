import { Component } from '@angular/core';
import { AfaService } from '../services/afa.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-afa-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  constructor(private afaService: AfaService) {}

  get characters(): Character[] {
    return [...this.afaService.characters];
  }
}
