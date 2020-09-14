import { Component, OnInit ,Input} from '@angular/core';
import {Product} from 'src/app/models/product'
import { MessangerService } from 'src/app/services/messanger.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  handleAddToCart() {
    this.msg.sendMsg(this.productItem)
    window.alert('Your product has been added to the cart!');
  }

  @Input() productItem: Product

  constructor(private msg:MessangerService) { }

  ngOnInit(): void {
  }
  // handleAddToCart() {
  //   this.msg.sendMsg(this.productItem)
  //   window.alert('Your product has been added to the cart!');
  // }

}

