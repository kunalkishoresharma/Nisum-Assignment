import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './IProduct';
import { Observable } from "rxjs";

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private _httpObj : HttpClient) { }

  //  private _urlProduct:string = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";
  //  Can't use Due to CORS Policy

  private _urlProduct:string = "../../assets/data/index.json";

  getProduct():Observable<IProduct[]>{
    return this._httpObj.get<[IProduct]>(this._urlProduct)
    .catch(this.handleError)
  }

  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message)
  }
}
