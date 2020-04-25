import { Component, OnInit, OnChanges } from '@angular/core';
import { CrudServiceService } from 'src/app/shared/services/crud-service.service';
import { Router } from '@angular/router';
import { product } from 'src/app/shared/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private _service: CrudServiceService, private _router: Router) { }
  productList;
  ngOnInit(): void {
    this.getProductList();
  }


  getProductList() {
    this._service.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  deleteItem(id: number) {
    console.log(id);
    this._service.deleteProduct(id).subscribe(data => console.log(data));
  }

  // editItem(prod: product) {
  //   this._service.currentProduct = Object.assign({}, prod);
  //   this._router.navigate(['home/create']);
  // }

  addToCart(item: product) {
    this._service.addToCart(item).subscribe(data => {
      console.log(data);
    });
    this._router.navigate(['home/cart']);
  }

  getDetails(id: number) {
    // tslint:disable-next-line: no-unused-expression
    console.log('called');
    this._router.navigate(['home/details/' + id]);
  }

}
