import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from 'src/app/cart.service';
import { Cartitem } from 'src/app/cartitem';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private cartsvc:CartService) { }

  count:number=1;

  receiveValue($event:number){
    this.count=$event;
  }

  onClick(){
    alert("You will recieve the notification as soon as the product is availbale!!");
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


  productdetails=[
    {
    "pid":"001",
    "image":"assets/laptop.jfif",
    "pname":"Laptop",
    "pdescription":"16 GB RAM, 12th Generation, i7 processor, Operating system: Windows 11",
    "price":"70000",
    "Status":"In Stock"
    },
    {
      "pid":"002",
      "image":"assets/mobile1.jfif",
      "pname":"Mobile",
      "pdescription":"8 GB RAM, 256 GB ROM, Dual Camera, Crystal-clear display, 5000mAh battery",
      "price":"20000",
      "Status":"In Stock"
    },
    {
        "pid":"003",
        "image":"assets/dress.jfif",
        "pname":"Dress",
        "pdescription":"Cotton Material, Long Sleeves, Transparent Duppatta, semi stitched",
        "price":"1000",
        "Status":"Out of Stock"
    },
    {
      "pid":"004",
      "image":"assets/watch.jfif",
      "pname":"Watch",
      "pdescription":"Bleed Blue, Day and Date Functioning Strap Adult Quartz Watch  ",
      "price":"2000",
      "Status":"In Stock"
    },
    {
        "pid":"005",
        "image":"assets/toy.jfif",
        "pname":"Toy",
        "pdescription":"Kids creation Play Set Non Toxic Plastic Unbreakable Toys",
        "price":"700",
        "Status":"Out of Stock"
    },
    {
      "pid":"006",
      "image":"assets/earrings.jfif",
      "pname":"Earring",
      "pdescription":"Colour: Silver Oxidiz, Material	German: Silver Closure",
      "price":"200",
      "Status":"In Stock"
    },
    {
      "pid":"007",
      "image":"assets/headphone.jfif",
      "pname":"Headphone",
       "pdescription":"Over Ear Active Noise Cancellation Headphones with Mic",
       "price":"3000",
       "Status":"In Stock"
    },
    {
      "pid":"008",
      "image":"assets/powerbank.jfif",
      "pname":"Powerbank",
      "pdescription":"3i 20000mAh Lithium Polymer 18W Fast PD Charging, Input- Type C",
      "price":"500",
      "Status":"Out of Stock"
    },
    {
      "pid":"009",
      "image":"assets/footwear.jfif",
      "pname":"Footwear",
      "pdescription":"Women Copper Flats Sandal, Durable stiching, outer material : synthetic",
      "price":"800",
      "Status":"Out of Stock"
    },
  ]


  ngOnInit(): void {
  }

}
