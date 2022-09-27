import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeAppliances } from './home-appliances';

@Injectable({
  providedIn: 'root'
})
export class HomeAppliancesService {

  constructor() { }

  appliances: HomeAppliances[] = [
    {
      pid: 1,
      pname: 'Telivision',
      pdescription: 'SONY Bravia 163.9 cm (65 inch) Ultra HD (4K) LED Smart Google TV  (KD-65X80J)',
      price: 97900,
      img: 'https://rukminim1.flixcart.com/image/832/832/kqqykcw0/television/1/f/n/kd-65x80j-sony-original-imag4p2wxahgfgmf.jpeg?q=70'
    },
    {
      pid: 2,
      pname: 'Air Conditioner',
      pdescription: 'LG Super Convertible 6-in-1 Cooling 1 Ton 5 Star Split Dual Inverter AI, 4 Way Swing, HD Filter with Anti-Virus Protection AC - White',
      price: 37490,
      img: 'https://rukminim1.flixcart.com/image/832/832/xif0q/air-conditioner-new/e/l/b/-original-imaggf36gs6p98gf.jpeg?q=70'
    },
    {
      pid: 3,
      pname: 'Fan',
      pdescription: 'Atomberg Studio+ 1200 mm BLDC Motor with Remote 3 Blade Ceiling Fan  (earth brown, Pack of 1)',
      price: 5100,
      img: 'https://rukminim1.flixcart.com/image/832/832/ku79vgw0/fan/e/l/e/studio-ceiling-fan-atomberg-original-imag7dqqwzjjsrvf.jpeg?q=70'
    },
    {
      pid: 4,
      pname: 'Mixer',
      pdescription: 'Preethi Zion MG-227/MG227_ 750 Juicer Mixer Grinder (4 Jars, Black)',
      price: 6100,
      img: 'https://rukminim1.flixcart.com/image/832/832/l4ln8nk0/mixer-grinder-juicer/q/q/j/-original-imagfggwknqjxsyx.jpeg?q=70'
    },
    {
      pid: 5,
      pname: 'Waching Machine',
      pdescription: 'SAMSUNG 6 kg 5 Star With Hygiene Steam and Ceramic Heater Fully Automatic Front Load with In-built Heater Silver',
      price: 23490,
      img: 'https://rukminim1.flixcart.com/image/832/832/kg6vfrk0/washing-machine-new/n/b/z/ww60r20glss-tl-samsung-original-imafwgrdhsn6hhpe.jpeg?q=70'
    },
    {
      pid: 6,
      pname: 'Oven Toaster',
      pdescription: 'WONDERCHEF 60-Litre Oven Toaster Griller (OTG) - 60 Litres, Stainless Steel – With Rotisserie, Auto-Shut Off, Heat-Resistant Tempered Glass',
      price: 11499,
      img: 'https://rukminim1.flixcart.com/image/832/832/kxdl3m80/otg-new/8/h/a/2000-steel-wonderchef-48-original-imag9un5ztegxzrf.jpeg?q=70'
    }
  ];

  public getAppliancesDetails(): any {
    const appliancesObservable = new Observable(observe => {
      setTimeout(() => {
        observe.next(this.appliances);
      }, 500);
    });
    return appliancesObservable;
  }
}
