import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private ApiRequestService: ApiRequestService) {}

  ngOnInit(): void {
    ApiRequestService.
  }
}
