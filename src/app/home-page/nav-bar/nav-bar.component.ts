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
  constructor(private _AuthService: AuthenticationService, private _router :Router, private _service: ApiRequestService) { }
  ngOnInit(): void { }
  English:boolean =this._service.isEnglish
  LogOut() {
    this._AuthService.logOut();
  }
  reNavigate(){
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._router.navigate([currentUrl]);
    });}
  changeAr(){
    this._service.setLanguageArabic();
    this.reNavigate();
    console.log("hxfdggdgd")

  }
  changeEn(){
    this._service.setLanguageEnglish();
    this.reNavigate();
    
  }
}


