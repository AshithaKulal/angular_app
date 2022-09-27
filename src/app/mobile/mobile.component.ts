import { Component, OnInit } from '@angular/core';
import * as prod from "../data/products.json";
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor() { }

  p:any=(prod as any).default;
  
  ngOnInit(): void {
  }

}
