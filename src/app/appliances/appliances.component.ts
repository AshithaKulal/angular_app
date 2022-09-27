import { Component, OnInit } from '@angular/core';
import * as prod from "../data/products.json";
import { HomeAppliances } from '../home-appliances';
import { HomeAppliancesService } from '../home-appliances.service';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';
import { Cartitem } from '../cartitem';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {
  appliances: HomeAppliances[]=[];

  constructor(private applianceservice:HomeAppliancesService, private cartsvc:CartService) { }
  p:any=(prod as any).default;

  ngOnInit(): void {
    const applianceObservable= this.applianceservice.getAppliancesDetails();
    applianceObservable.subscribe((HAData: HomeAppliances[])=>{
      this.appliances=HAData;
    });
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
  count:number=1;

  receiveValue($event:number){
    this.count=$event;
  }

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

}
