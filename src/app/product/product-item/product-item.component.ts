import { Component, OnInit,Input} from '@angular/core';
import {Product} from 'src/app/models/product';
import {MessangerService} from 'src/app/services/messanger.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product


  constructor(private msg: MessangerService,private rout:Router) { }

  ngOnInit(): void {
  }
  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    window.alert('Your product has been added to the cart!');
  

    
  }

}
