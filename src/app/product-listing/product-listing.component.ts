import { Component, OnInit } from '@angular/core';
import { ProductService } from '../model/product.service';
import { IProduct } from '../model/IProduct';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  iproducts : IProduct[];
  data = [];

  constructor(private _productData:ProductService) { }

  ngOnInit() {
    this._productData.getProduct()
    .subscribe(product=>{
      this.data.push(product);
     })
       
  }

}
