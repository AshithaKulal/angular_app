import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

 
  // public feedback="";

  // msg(){
  //   alert('Thanks for your feedback');
  // }
  commenturl = environment.commentapi;
  
  FeedbackForm = new FormGroup({
    name: new FormControl(''),
    feedback: new FormControl(''),
  })

  submitted = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.FeedbackForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(5)]],
      feedback: ['', [Validators.required]],
     

    });
  }
  get f() { return this.FeedbackForm.controls; }
  
  submitHandler() {
    this.submitted = true;
    if (this.FeedbackForm.invalid) {
      return;
    }

    this.http.post<any>(this.commenturl, this.FeedbackForm.value)
      .subscribe(res => {
        alert("Thank you for the Feedback")
        this.FeedbackForm.reset();
  
      })

  }


  

}
