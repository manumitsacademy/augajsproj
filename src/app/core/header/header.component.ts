import { Component, OnInit } from '@angular/core';
import { CartService } from '../../product/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cs:CartService) { }
  purchageCount:any=0;
  ngOnInit() {
    this.cs.updateCart.subscribe((res)=>{
      console.dir(res);
      this.purchageCount=JSON.stringify(res);
      console.log(this.cs.cart)
    });
  }

}
