import { Component, OnInit } from '@angular/core';
import * as prod from "../data/products.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  p:any=(prod as any).default;

  ngOnInit(): void {
  }

}
