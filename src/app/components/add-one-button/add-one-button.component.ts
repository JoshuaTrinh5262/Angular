import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-one-button',
  templateUrl: './add-one-button.component.html',
  styleUrls: ['./add-one-button.component.scss']
})
export class AddOneButtonComponent implements OnInit {
  title = 'Add One Button Component'
  count = 0;
  test1 = 'test 1';
  test2 = 'test 2';
  color = 'red';
  hidden = false;
  constructor() { }

  ngOnInit(): void {
  }

}
