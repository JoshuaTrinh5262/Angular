import { Component, OnInit } from '@angular/core';
import { SQUADS } from './mock-squad';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
  squads = SQUADS;
  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {
  }

  delete(squad): void {

  }
  
  goBack(): void {
    this.navigationService.goBack();
  }
}
