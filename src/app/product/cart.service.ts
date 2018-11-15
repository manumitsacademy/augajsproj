import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart=[];
  cartDetails=[];
  updateCart = new Subject();
  constructor(public http:HttpClient) { }
  addProductToCart(id){
    this.cart.push(id);
    var length:number=this.cart.length;
    this.updateCart.next(length);
  }
  getCartProductDetails(){
    for(let i=0;i<this.cart.length;i++){
      this.http.get(`https://api.mlab.com/api/1/databases/shoppingdb/collections/products/${this.cart[i]}?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`)
      .subscribe((res)=>{
        this.cartDetails.push(res);
      });
    }
    return this.cartDetails;
  }
}
