import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from 'src/app/sampleservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.html',
  styleUrls: ['./add-cart.component.scss']
})
export class AddCartComponent implements OnInit {

  cartNumber: number = 0;
  oneVar: any = '';

  constructor(private newTry: SampleserviceService) { }

  ngOnInit(): void {
    this.newTry.getMethodPractice().subscribe((newNameIs: any) => {
      this.oneVar = newNameIs;
      console.log('newNameIs')
    });
  }

  cartIncreament() {
    this.cartNumber = ++this.cartNumber;
  }

  cartDecreament() {
    this.cartNumber = --this.cartNumber;
  }

  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}