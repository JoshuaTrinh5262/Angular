import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  sHeroes: Hero[] = [];
  aHeroes: Hero[] = [];
  bHeroes: Hero[] = [];
  cHeroes: Hero[] = [];
  dHeroes: Hero[] = [];
  eHeroes: Hero[] = [];
  fHeroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getHeroesByRank();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getHeroesByRank(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.sHeroes = heroes.filter(hero => hero.rank === 'S');
      this.aHeroes = heroes.filter(hero => hero.rank === 'A');
      this.bHeroes = heroes.filter(hero => hero.rank === 'B');
      this.cHeroes = heroes.filter(hero => hero.rank === 'C');
      this.dHeroes = heroes.filter(hero => hero.rank === 'D');
      this.eHeroes = heroes.filter(hero => hero.rank === 'E');
      this.fHeroes = heroes.filter(hero => hero.rank === 'F');
    });
  }
}
