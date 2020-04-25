import { product } from './../../shared/product';
import { CrudServiceService } from './../../shared/services/crud-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(public _service: CrudServiceService) { }
  ngOnInit(): void {
  }

  create(data: product) {
    console.log(data);
  }
}
