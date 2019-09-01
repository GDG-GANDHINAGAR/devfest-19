import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner-image',
  templateUrl: './partner-image.component.html',
  styleUrls: ['./partner-image.component.sass']
})
export class PartnerImageComponent implements OnInit {
  @Input() src: String;
  constructor() { }

  ngOnInit() {
  }

}
