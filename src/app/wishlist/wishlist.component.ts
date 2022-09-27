import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newItem: string=' '  

  Add_item(item_name:string):void{
    if(!item_name)
    {
      this.newItem=' ';
    }
    this.newItem=item_name; 
    console.log(item_name)
  }
}
