import { Injectable } from '@angular/core';

import{Product} from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 

 products:Product[]=[
   new Product(101, "Redmi 8A Dual (Sky White)", "abc",8379, "../../assets/mi-redmi-8a.jpeg"),
   new Product(102, "Apple iphone 11 (Purple)", "abc",71600, "../../assets/iphone-11.jpeg"),
   new Product(103, "Motorola One Fusion Plus (Twilight Blue)", "abc",17499, "../../assets/motorola-one-fusion-.jpeg"),
   new Product(104, "Realme C3 (Frozen Blue)", "abc",9999, "../../assets/realme-c3.jpeg"),
   new Product(105, "Apple iphone XR (White)", "abc",47500, "../../assets/apple-iphone-xr.jpeg"),
   new Product(106, "Apple iphone SE (Black)", "abc",37900, "../../assets/apple-iphone-se.jpeg"),
   new Product(107, "Redmi Note 9 Pro (Glacier White)", "abc",17849, "../../assets/mi-redmi-note-9-pro.jpeg"),
   new Product(108, "Moto One (Black)", "abc",14999, "../../assets/moto-one-64.jpeg"),
   new Product(109, "One Plus 8 (Glacil Green)", "abc",49999, "../../assets/oneplus-8.jpeg"),
   new Product(110, "OPPO A9 2020 (Space Purple)", "abc",15990, "../../assets/oppo-a9-2020-.jpeg"),
   new Product(111, "OPPO F17 Pro (Magic Blue)", "abc",22990, "../../assets/oppo-f17-pro.jpeg"),
   new Product(112, "RealMe 5i (Aqua Blue)", "abc",10999, "../../assets/realme-5i.jpeg"),
   new Product(113, "RealMe 6 (comet Blue)", "abc",14999, "../../assets/realme-6.jpeg"),
   new Product(114, "Redmi Note 9 (Scarlet Red)", "abc",14320, "../../assets/redmi note 9.jpeg"),
   new Product(115, "Redmi K20 Pro (Glacier blue)", "abc",22999, "../../assets/redmi-k20-pro-.jpeg"),
   new Product(116, "Redmi Note 7 (Sapphire Blue)", "abc",12950, "../../assets/redmi-note-7.jpeg"),
   new Product(117, "Vivo Y20 (Obsidian Black)", "abc",12990, "../../assets/vivo-y20-.jpeg"),
   new Product(118, "Vivo Y30 (Dazzle Blue)", "abc",17849, "../../assets/vivo-y30.jpeg"),


 ]

  constructor() { }
 getProducts():Product[]{

  return this.products
 }
}

