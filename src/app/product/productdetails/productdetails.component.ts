import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public ps:ProductService,public cs:CartService) { }
  productDetails;
  ngOnInit() {
    this.ar.params.subscribe((res)=>{
      this.ps.getProductDetailsById(res.id).subscribe((res)=>{
        this.productDetails=res;
      });
    })
  }
  addtocart(id){
    this.cs.addProductToCart(id);
  }

}
