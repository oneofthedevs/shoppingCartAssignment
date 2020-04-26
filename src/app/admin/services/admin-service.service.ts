import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/app/shared/product';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private _http: HttpClient) { }
  currentProduct: product = {
    id: null,
    name: '',
    description: '',
    price: null,
    category: '',
    image: ''
  };

  baseURL = 'http://localhost:3000/Products';
  headerOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  private handleError(error: any) {
    console.error(`%c ⚔️Error occured ${error}`, 'color: red');
    return throwError(error);
  }
  getAllItems(): Observable<product[]> {
    return this._http.get<product[]>(this.baseURL, this.headerOption).pipe(
      tap(),
      catchError(this.handleError)
    );
  }

  deleteProduct(id: number): Observable<product> {
    return this._http.delete<product>(this.baseURL + `/${id}`, this.headerOption).pipe(catchError(this.handleError));
  }

  createProduct(item: product): Observable<product> {
    item.id = Math.floor(Math.random() * 1000000);
    return this._http.post<product>(this.baseURL, item, this.headerOption).pipe(catchError(this.handleError));
  }
  updateProduct(item: product): Observable<product> {
    return this._http.put<product>(this.baseURL + `/${item.id}`, item, this.headerOption).pipe(catchError(this.handleError));
  }
}
