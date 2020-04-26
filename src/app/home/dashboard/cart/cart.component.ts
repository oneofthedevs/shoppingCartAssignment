import { Router } from '@angular/router';
import { CrudServiceService } from './../../../shared/services/crud-service.service';
import { Component, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _service: CrudServiceService, private _router: Router) { }
  list;
  ngOnInit(): void {
    this.getItems();
  }
  // ngAfterContentInit() {
  //   console.log('called');
  //   this.getItems();
  // }
  getItems() {
    this._service.getCartItems().subscribe(data => {
      this.list = data;
    });
  }

  deleteItem(id: number) {
    this._service.deleteCartItem(id).subscribe(data => {
      console.log(data);
      this.getItems();
    });
  }

}
