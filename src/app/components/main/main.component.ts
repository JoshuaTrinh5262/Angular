import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'Angular';
  heroTitle = 'Tour of Heroes';
  constructor() { }

  ngOnInit(): void {
    
  }

}
