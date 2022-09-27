import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproduct.json";

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allprod as any).default;

}
