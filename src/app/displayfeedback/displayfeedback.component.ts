import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-displayfeedback',
  templateUrl: './displayfeedback.component.html',
  styleUrls: ['./displayfeedback.component.css']
})

export class DisplayfeedbackComponent implements OnInit {

  constructor(private feedSvc: FeedbackService) { }
  
  carts:Feedback={
    pid:0,
    name:'',
    feedback:''  
  }
 
  
  fb: Feedback[] = [];
 
 
  
  ngOnInit(): void {
    this.feedSvc.getFeedback().subscribe(
      (response) => {
        this.fb = response;
        console.log(this.fb);
      }
    )
  }

  delete(deleteItem: Feedback) {
    this.feedSvc.removeFeedback(deleteItem).subscribe(
      () => console.log(deleteItem.name)      
    );
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'error',
      title: 'Feedback deleted successfully'
    })
    this.ngOnInit();
  }

  
  
  
}
