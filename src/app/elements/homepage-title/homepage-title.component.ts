import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage-title',
  templateUrl: './homepage-title.component.html',
  styleUrls: ['./homepage-title.component.sass']
})
export class HomepageTitleComponent implements OnInit {
  @Input() title: String;
  @Input() color: String;
  constructor() { }

  ngOnInit() {
  }

}
