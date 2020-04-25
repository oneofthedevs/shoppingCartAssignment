import { product } from './../product';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CrudServiceService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient, private _router: Router) {
  }
  currentProduct: product = {
    id: null,
    name: '',
    description: '',
    price: null,
    category: '',
    image: ''
  };
  headerOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  // baseURL will be used to perform ops on Product DB which contains all the products
  baseURL = 'http://localhost:3000/Products';
  // cartURL will be used to perform ops in items added to card
  cartURL = 'http://localhost:3000/cart';

  // For console logging handling errors
  private handleError(error: any) {
    console.error(`%c ⚔️Error occured ${error}`, 'color: red');
    return throwError(error);
  }

  // Product List Functions
  // GET
  getProducts(): Observable<product[]> {
    return this._http.get<product[]>(this.baseURL, this.headerOption).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  // GET/id
  getProductDetails(id: number): Observable<product> {
    return this._http.get<product>(this.baseURL + `/${id}`, this.headerOption).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  // // Post
  // addProduct(data: product): Observable<product> {
  //   return this._http.post<product>(this.baseURL, data, this.headerOption);
  // }

  // Delete/id
  deleteProduct(id: number): Observable<product> {
    return this._http.delete<product>(this.baseURL + `/${id}`, this.headerOption);
  }
  // // Edit/id
  // editProduct(data: product) {

  // }

  // Cart Functions
  // POST
  addToCart(item: product): Observable<product> {
    item.id = Math.floor(Math.random() * 1000000);
    return this._http.post<product>(this.cartURL, item, this.headerOption);
  }

  // GET
  getCartItems(): Observable<product[]> {
    return this._http.get<product[]>(this.cartURL, this.headerOption);
  }

  // GET/id
  deleteCartItem(id: number): Observable<product> {
    return this._http.delete<product>(this.cartURL + `/${id}`, this.headerOption);
  }
}
