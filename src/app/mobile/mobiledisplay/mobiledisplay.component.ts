import { Component, OnInit } from '@angular/core';
import * as mobiledata from "../mobile.json";
import Swal from 'sweetalert2';
import { CartService } from 'src/app/cart.service';
import { Cartitem } from 'src/app/cartitem';

@Component({
  selector: 'app-mobiledisplay',
  templateUrl: './mobiledisplay.component.html',
  styleUrls: ['./mobiledisplay.component.css']
})
export class MobiledisplayComponent implements OnInit {

  constructor( private cartsvc:CartService) { }

  count:number=1;

  receiveValue($event:number){
    this.count=$event;
  }

  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  // quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.count;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }


  mobile:any=(mobiledata as any).default;

  ngOnInit(): void {
  }

}
