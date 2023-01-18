import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  fruitsList: string[] = ['Apple', 'Orange', 'Banana', 'Mango', 'Pine Apple'];
  fruitsList2: string[] = ['Apple2', 'Orange2', 'Banana2', 'Mango2', 'Pine Apple2'];
  fruitsList3: string[] = ['Apple3', 'Orange3', 'Banana3', 'Mango3', 'Pine Apple3'];
  constructor() { }

  ngOnInit(): void {
  }

}
