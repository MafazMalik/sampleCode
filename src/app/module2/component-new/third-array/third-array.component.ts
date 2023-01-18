import { Component, OnInit, Input } from '@angular/core';
import { SampleserviceService } from 'src/app/sampleservice.service';

@Component({
  selector: 'app-third-array',
  templateUrl: './third-array.component.html',
  styleUrls: ['./third-array.component.scss']
})
export class ThirdArrayComponent implements OnInit {

  @Input() fruits: any;
  @Input() fruits1: any;
  @Input() fruits2: any;

  constructor(private callService: SampleserviceService) { }

  ngOnInit(): void {
    this.callService.helloFunction();
    console.log(this.fruits);
  }

}
 