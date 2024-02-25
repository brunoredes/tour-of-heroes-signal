import { Component, WritableSignal, signal } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  hero: WritableSignal<Hero> = signal({
    id: 1,
    name: 'Windstorm',
  });
}
