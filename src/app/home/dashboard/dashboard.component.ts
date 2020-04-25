import { product } from './../../shared/product';
import { CrudServiceService } from './../../shared/services/crud-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _service: CrudServiceService, private _router: Router) { }
  productList;
  cartCount;
  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this._service.getProducts().subscribe(data => {
      this.productList = data;
    })
  }

  deleteItem(id: number) {
    console.log(id);
    this._service.deleteProduct(id).subscribe(data => console.log(data));
  }

  editItem(prod: product) {
    this._service.currentProduct = Object.assign({}, prod);
    this._router.navigate(['home/create']);
  }

  addToCart(item: product) {
    item.id = Math.floor(Math.random() * 100000);
    this._service.addToCart(item).subscribe(data => {
      console.log(data);
    });
  }

}
