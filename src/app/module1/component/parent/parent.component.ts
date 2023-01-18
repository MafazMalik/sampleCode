import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  getMsg: string = '';

  getMessage(data: string) {
    this.getMsg = data;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
