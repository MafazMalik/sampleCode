import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchstatement',
  templateUrl: './switchstatement.component.html',
  styleUrls: ['./switchstatement.component.scss']
})
export class SwitchstatementComponent implements OnInit {

  livingThings: string = '';
  course: string = 'html';
  bgColor: boolean = false;

  toggleDisplayDiv() {
    this.bgColor = !this.bgColor;
  }

  setvalue(drp: any) {
    this.course = drp.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
