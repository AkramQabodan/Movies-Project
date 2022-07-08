import { AuthenticationService } from 'app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'app/services/api-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _AuthService: AuthenticationService,
    private _router: Router,
    public _service: ApiRequestService
  ) {}

  LogOut() {
    this._AuthService.logOut();
  }

  changeAr() {
    this._service.setLanguageArabic();
    console.log('changed to arabic');
    this._service.reNavigate();
  }
  changeEn() {
    this._service.setLanguageEnglish();
    console.log('changed to english');
    this._service.reNavigate();
  }
  ngOnInit(): void {}
}
