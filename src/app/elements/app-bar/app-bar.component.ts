import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.sass']
})
export class AppBarComponent implements OnInit {

  isScrolled;
  isMobile: boolean;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (e.target['scrollingElement'].scrollTop >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    // console.log(e.target['scrollingElement'].scrollTop);
  } constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      }
    });
  }
  ngOnInit() {
    this.isScrolled = window.pageYOffset >= 200;
    console.log(window.pageYOffset);
  }

}
