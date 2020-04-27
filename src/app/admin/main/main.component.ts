import { product } from 'src/app/shared/product';
import { AdminServiceService } from './../services/admin-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allProducts;
  // tslint:disable-next-line: variable-name
  constructor(private _router: Router, public _service: AdminServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this._service.getAllItems().subscribe(data => {
      this.allProducts = data;
    });
  }
  deleteProduct(id: number) {
    this._service.deleteProduct(id).subscribe(data => {
      this.getProducts();
    });
  }

  addOrEdit(currentProduct: product) {
    console.log(currentProduct);
    // tslint:disable-next-line: max-line-length
    if (currentProduct.name === '' || currentProduct.price === null || currentProduct.description === '' || currentProduct.category === '') {
      alert('All Fields are Required')
    }
    else {
      if (currentProduct.id === null) {
        this.createProduct(currentProduct);
        console.log(currentProduct);
      }
      else {
        this.updateProduct(currentProduct);
        console.log(currentProduct);
      }
    }
  }
  createProduct(item: product) {
    this._service.createProduct(item).subscribe(data => {
      this.getProducts();
      this.reset();
    });
  }
  updateProduct(item: product) {
    this._service.updateProduct(item).subscribe(data => {
      this.getProducts();
      this.reset();
    });
  }

  editProduct(item: product) {
    // console.log(item);
    this._service.currentProduct = Object.assign({}, item);
  }
  reset() {
    this._service.currentProduct = {
      id: null,
      name: '',
      description: '',
      price: null,
      category: '',
      image: ''
    };
  }
}
