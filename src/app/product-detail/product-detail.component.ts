import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../model/product.service';
import { IProduct } from '../model/IProduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  iproducts : IProduct[];
  imageUrlArray = [];
  constructor(private _route: ActivatedRoute, private _productData: ProductService) { }

  ngOnInit() {
    const id = this._route.snapshot.params["id"];
    //console.log(id) 
    this._productData.getProduct().subscribe(prod=>{
      console.log(prod)
      this.iproducts=prod.groups.filter(<IProduct>(data)=>data.id == id)
    });

  }

  @Input() 'scrollbar-hidden': boolean; 'drag-scroll-disabled':boolean;


  @ViewChild('designslider', {read: DragScrollComponent}) ds: DragScrollComponent ;
  
    moveLeft() {
      this.ds.moveLeft();
    }
  
    moveRight() {
      this.ds.moveRight();
    }
    showPopup = false;
    openModal() {
      this.showPopup = true;
    }

    closeModal() {
      this.showPopup = false;

    }
   
}