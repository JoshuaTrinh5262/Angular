import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.scss'
  ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  ranks = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
  heroesByRank = [];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroesByRank();
  }

  getHeroesByRank(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      for (const rank of this.ranks) {
        this.heroesByRank[rank] = heroes.filter(hero => hero.rank === rank);
      }
    });
  }
}
