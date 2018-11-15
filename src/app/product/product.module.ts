import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ProductlistComponent } from './productlist/productlist.component';
import { routes } from './product.routes';
import { RouterModule } from '@angular/router';
import { ProductService } from './product.service';
import { ProductthumbnailComponent } from './productthumbnail/productthumbnail.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {CartService} from './cart.service';
import { CartComponent } from './cart/cart.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [ProductlistComponent, ProductthumbnailComponent, ProductdetailsComponent, CartComponent],
  providers:[ProductService,CartService]
})
export class ProductModule { }
