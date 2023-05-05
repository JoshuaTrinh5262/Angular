import { Component, OnInit } from '@angular/core';
import { CRISIS } from './mock-crisis';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises = CRISIS;
  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit(): void {

  }

  delete(crisis): void {

  }

  goBack(): void {
    this.navigationService.goBack();
  }
}
