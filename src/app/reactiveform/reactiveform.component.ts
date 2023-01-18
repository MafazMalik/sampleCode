import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SampleserviceService } from '../sampleservice.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

  checking: boolean = false;

  constructor(private serviceCall: SampleserviceService) { }

  sampleForm = new FormGroup(
    {
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      userMail: new FormControl('', [Validators.email, Validators.required]),
      yourCourse: new FormControl('', Validators.required),
      feedBack: new FormControl('', Validators.required),
      uploadFile: new FormControl('', Validators.required),
      passwordNew: new FormControl('', [Validators.pattern('^[a-z0-9]{8,15}$'), Validators.required]),
      confirmPasswordNew: new FormControl('', [Validators.pattern('^[a-z0-9]{8,15}$'), Validators.required]),
      radioButton: new FormControl('', Validators.required),
      switchOn: new FormControl('', Validators.required),
      switchoff: new FormControl('', Validators.required),
      dropDown: new FormControl('', Validators.required),
      yourColor: new FormControl('', Validators.required),
      bDay: new FormControl('', Validators.required),
      phnNum: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      wakeTime: new FormControl('', Validators.required)
    }
  );

  // sampleFormControls=this.sampleForm.controls;     (If you want this line you can write for this purpose -->(In name.component.html ulla --> <p *ngIf="sampleFormControls.userName.Invalid">Some thing</p>))

  ngOnInit(): void {
  }

  updatePls() {
    this.serviceCall.putMethodPractice(this.sampleForm.value).subscribe((detailPut) => {
      console.log(detailPut);
    });
    console.log(this.sampleForm.value);
    this.sampleForm.reset();
  }

  checkPass() {
    if (this.sampleForm.controls.passwordNew.value == this.sampleForm.controls.confirmPasswordNew.value) {
      this.checking = true;
    }
    else {
      this.checking = false;
    }
    console.log(this.checking);
  }

}
