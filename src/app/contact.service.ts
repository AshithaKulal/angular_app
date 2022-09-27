import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  contact: Contact[] = [
    {
      location:'Bangalore',
      address:'Tower 5A Embassy Tech Village Rd',
      mbl:9880929003,
      email:'bangalore@ flipkart.com',
      insta:'FlipkartBlore',
      color:'antiquewhite'
    },
    {
      location:'Chennai',
      address:'Chamier 6th Nandanam Extension ',
      mbl:990220789,
      email:'chennai@ flipkart.com',
      insta:'FlipkartChennai',
      color:'burlywood'
    },
    {
      location:'Mumbai',
      address:'Lotus Business Park c10 modi estate dalalia ',
      mbl:6789088734,
      email:'mumbai@ flipkart.com',
      insta:'FlipkartMumbai',
      color:'darksalmon'
    },
    {
      location:'Kerala',
      address:'PVWRA-95 Ponevazhi Road,Ponekkar',
      mbl:8990088773,
      email:'kerala@ flipkart.com',
      insta:'FlipkartKerala',
      color:'lightcoral'
    },
    
  ];

  public getContactDetails(): any {
    const contactObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.contact);
      }, 500);
    });
    return contactObservable;
  }

}
