import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _router: Router) {
    this.checkLogin();
  }

  ngOnInit(): void {
  }
  check(n: string, p: string) {
    if (n === 'admin@admin.com' && p === 'admin') {
      localStorage.setItem('admin', n);
      this._router.navigate(['admin'])
      return true;
    } else {
      alert('incorrect Data');
      return false;
    }
  }

  checkLogin() {
    if (localStorage.getItem('admin') != null) {
      this._router.navigate(['admin']);
    }
  }
}
