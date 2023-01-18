import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new1',
  templateUrl: './new1.component.html',
  styleUrls: ['./new1.component.scss']
})
export class New1Component implements OnInit {

  currentDate:any='12-21-2001';
  a: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
