import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Iroman';
  public age: number = 23;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Messi';
  }

  changeAge(): void {
    this.age = 37;
  }

  resetForm(): void {
    this.name = 'Iroman';
    this.age = 23;
  }
}
