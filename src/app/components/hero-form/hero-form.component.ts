import { Component } from '@angular/core';
import { SQUADS } from '../squads/mock-squad';
import { Hero } from 'src/app/hero';
import { NavigationService } from 'src/app/services/navigation.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  ranks = ['S', 'A', 'B', 'C', 'D', 'E', 'F'];
  squads = SQUADS.map(squad => squad.squadId);

  //default value for form ?
  model = new Hero(27, 'Dr. IQ', 18, 'Male', this.ranks[0], this.powers[0], this.squads[0], false);

  submitted = false;

  constructor(
    private navigationService: NavigationService,
    private messageService: MessageService
    ) { }

  onSubmit() { 
    this.submitted = true;
    this.messageService.add('Form Summited');
  }

  newHero() {
    this.model = new Hero(42, '', 18, 'Male', 'F');
  }

  goBack(): void {
    this.navigationService.goBack();
  }
}
