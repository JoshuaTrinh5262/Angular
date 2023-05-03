import { Component, OnInit } from '@angular/core';
import { CRISIS } from './mock-crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {
  crises = CRISIS;
  constructor() { }

  ngOnInit(): void {
  }
}
