import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/sampleservice.service';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  mobileList: string[] = ['Oppo', 'Vivo', 'Samsung', 'Apple', '1+'];
  mobileListOne: any = '';
  addNew: string = '';
  deleteString: string = '';
  environment = environment;

  constructor(private sampleHttpClient: SampleserviceService) {

    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);

  }

  ngOnInit(): void {
    this.sampleHttpClient.getMethodFun().subscribe((data: any) => {
      this.mobileListOne = data.entries;
      console.log(data);
    });
    this.sampleHttpClient.deleteMethodPractice().subscribe((deleteData: any) => {
      this.deleteString = deleteData;
    })
  }

  addNewList() {
    this.mobileList.push(this.addNew);
    this.addNew = '';
  }

}
