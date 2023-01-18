import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/sampleservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private alerbox: SampleserviceService) { }

  ngOnInit(): void {
    this.alerbox.helloFunction();
  }

}
