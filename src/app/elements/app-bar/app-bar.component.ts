import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.sass']
})
export class AppBarComponent implements OnInit {
  isScrolled = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (e.target['scrollingElement'].scrollTop >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    // console.log(e.target['scrollingElement'].scrollTop);
  }
  constructor() { }

  ngOnInit() {
  }

}
