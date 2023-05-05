import { Component } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from 'src/app/services/hero.service';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  isHiddenOn = true;

  constructor(
    private heroService: HeroService,
    private navigationServe: NavigationService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  toggle() {
    this.isHiddenOn = !this.isHiddenOn;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  goBack() {
    this.navigationServe.goBack();
  }
}
