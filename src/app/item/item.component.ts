import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  newItem:any | undefined;

  @Input('item') 
  
  set pname(nitem:any) 
  {
    this.newItem=nitem ;
    console.log(nitem)
  }
  
  get nitem():string
  {
    return this.newItem;
  }

  

  ngOnInit(): void {
  }

}
