import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() newList /*(anyname(anyvariable))*/ = new EventEmitter<any>();

  sendMessage(){
    this.newList.emit('Hello');
  }

  constructor() { }

  ngOnInit(): void {
    this.sendMessage();
  }

}
