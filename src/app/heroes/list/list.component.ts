import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = [
    'Messi',
    'Mascherano',
    'Carlos Jara Saguier',
    'Lamine Yamal',
  ];
}
