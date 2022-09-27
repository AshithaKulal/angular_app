import { Component, OnInit } from '@angular/core';
import * as prod from "../data/products.json";

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {

  constructor() { }

  p:any=(prod as any).default;

  ngOnInit(): void {
  }

}
