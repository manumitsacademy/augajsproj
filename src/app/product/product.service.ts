import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }
  getAllProducts(){
    return this.http.get("https://api.mlab.com/api/1/databases/shoppingdb/collections/products?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz");
  }
  getProductDetailsById(id){
    return this.http.get(`https://api.mlab.com/api/1/databases/shoppingdb/collections/products/${id}?apiKey=ClSj0HxNv3sPJwS3cZOsbZI9exWxVjqz`);
  }
}
