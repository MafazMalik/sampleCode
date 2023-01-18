import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.scss']
})
export class FormcomponentComponent implements OnInit {

  varRadio: any = 1;
  varToggle = true;
  passValidNum: string = '';
  conPassValidNum: string = '';
  checking: boolean = false;



  constructor(private _demoService: SampleserviceService) { }

  ngOnInit(): void {
    this._demoService.helloFunction();
  
  }

  getForm(malik: any) {
    this._demoService.postMethodPractice(malik.value).subscribe((detailUsers) => {
      console.log(detailUsers);
    });
    console.log(malik);
    console.log(malik.value.username);
    console.log(malik.value.userMail);
    console.log(malik.value.courseDetail);
    console.log(malik.value.feedBack);
    console.log(malik.value.yourFile);
    console.log(this.passValidNum);
    console.log(this.conPassValidNum);
    console.log(malik.value.degree);
    console.log(malik.value.switchButton1);
    console.log(malik.value.switchButton2);
    console.log(malik.value.yourDepartment);
    console.log(malik.value.yourColor);
    console.log(malik.value.birthday);
    console.log(malik.value.phoneNumber);
    console.log(malik.value.yourTime);
    malik.reset();
  }

  checkPass() {
    if (this.passValidNum == this.conPassValidNum) {
      this.checking = true;
    }
    else {
      this.checking = false;
    }
    console.log(this.checking);
  }
}
