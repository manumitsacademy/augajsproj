import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(public ps:ProductService) { }
  productList;
  ngOnInit() {
    this.ps.getAllProducts().subscribe((res)=>{
      this.productList=res;
    });
  }

}
