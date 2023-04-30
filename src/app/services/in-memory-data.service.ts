import { Injectable } from '@angular/core';
import { HEROES } from '../components/heroes/mock-heroes';
import { Hero } from '../components/heroes/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const heroes = HEROES;
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
