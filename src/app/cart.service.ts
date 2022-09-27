import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cartitem } from './cartitem';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string = ""
  carturl = environment.cartapi;
  constructor(private http: HttpClient) {
    this.url = this.carturl + "/";

  }

  addToCart(product: Cartitem) {

    this.http.post<Cartitem>(this.carturl, product).subscribe(data => {
      console.log(product)
    })
  }
  getCartItems() {
    return this.http.get<Cartitem[]>(this.carturl);
  }

  removeItemFromCart(item: any) {

    return this.http.delete(this.url + item.id)
  }
  
  public countSubject = new Subject<number>();
  getCount() {
    return this.getCartItems().subscribe(res => {
      this.countSubject.next(res.length);
      console.log(this.countSubject + "inside sub"); 
    })
  }
}
