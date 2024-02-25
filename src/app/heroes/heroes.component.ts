import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'toh-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  hero = signal<Hero>({
    id: 1,
    name: 'Windstorm',
  });
}
