import { Component, OnInit } from '@angular/core';
import { SQUADS } from './mock-squad';

@Component({
  selector: 'app-squads',
  templateUrl: './squads.component.html',
  styleUrls: ['./squads.component.scss']
})
export class SquadsComponent implements OnInit {
  squads = SQUADS;
  constructor() { }

  ngOnInit(): void {
  }

}
