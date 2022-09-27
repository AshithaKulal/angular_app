import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counterValue=1;
  countLessThenOne=true;
  countGreaterTen=false;
  
  @Output() countEmmitter =new EventEmitter(); 

  PostValue(){
    this.countEmmitter.emit(this.counterValue);
  }

  
  decrement(){
    if(this.counterValue==1)
    {
      this.countLessThenOne=false;
    }
    else{
      this.countLessThenOne=true;
      this.counterValue--;
      this.countGreaterTen=true;
    }
    this.PostValue();
  }

  increment(){
    if(this.counterValue==10){
      this.countGreaterTen=false;

    }
    else{
      this.counterValue++;
      this.countLessThenOne=true;
    }
    this.PostValue();
  }



}
