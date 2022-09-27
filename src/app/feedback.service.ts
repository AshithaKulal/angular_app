import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
    url: string = ""
    commenturl = environment.commentapi;
    constructor(private http: HttpClient) {
      this.url = this.commenturl + "/";
  
    }
  
    addFeedback(feedback: Feedback) {
  
      this.http.post<Feedback>(this.commenturl, feedback).subscribe(data => {
        console.log(feedback)
      })
    }
    getFeedback() {
      return this.http.get<Feedback[]>(this.commenturl);
    }

    removeFeedback(item: any) {

      return this.http.delete(this.url + item.id)
    }

 
}
