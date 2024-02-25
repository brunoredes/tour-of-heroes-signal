import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  heroes = signal(HEROES);
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
