import { Component, OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
// tslint:disable-next-line: max-line-length
export class OthersComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  currency = 10000000;
  date = new Date();
  text = 'This is some random text';
  decimal = 12340.66;
  inputText;
  constructor() {
    console.log('%c Constructor Called', 'color: orange');
  }

  ngOnInit(): void {
    console.log('%c OnInit Called', 'color: red');
  }
  ngOnChanges(): void {
    console.log('%c OnChanges Called', 'color: blue');
  }
  ngAfterContentInit() {
    console.log('%c ngAfterContentInit Called', 'color: green');
  }
  ngAfterContentChecked() {
    console.log('%c ngAfterContentChecked Called', 'color: cyan');
  }
  ngAfterViewInit() {
    console.log('%c ngAfterViewInit Called', 'color: brown');
  }
  ngAfterViewChecked() {
    console.log('%c ngAfterViewChecked Called', 'color: pink');
  }
  ngOnDestroy() {
    console.log('onDestry Called');
  }
}
