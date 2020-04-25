import { async } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CrudServiceService } from 'src/app/shared/services/crud-service.service';
import { product } from 'src/app/shared/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private _router: ActivatedRoute, private _service: CrudServiceService, private _route: Router) { }
  id: number;
  productdata;
  ngOnInit(): void {
    this.getId();
    this.getDetails(this.id);
  }

  getId() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this._router.snapshot.paramMap.get('id'));

  }

  getDetails(id: number) {
    this._service.getProductDetails(id).subscribe(data => {
      this.productdata = data;
      console.log(data);
    });
  }

  addToCart(item: product) {
    this._service.addToCart(item).subscribe(data => {
      console.log(data);
    });
    this._route.navigate(['home/cart']);
  }
}
