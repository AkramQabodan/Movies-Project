import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv-media-card',
  templateUrl: './tv-media-card.component.html',
  styleUrls: ['./tv-media-card.component.scss']
})
export class TvMediaCardComponent implements OnInit {
  @Input() input:any
  constructor() { }

  ngOnInit(): void {
  }

}
