import { AuthenticationService } from 'app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private _AuthService: AuthenticationService) {}

  LogOut() {
    this._AuthService.logOut();
  }

  ngOnInit(): void {}
}
