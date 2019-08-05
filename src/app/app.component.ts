import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened = false;
  isScrolled;
  isMobile: boolean;
  @HostListener('scroll', ['$event'])
  onScroll(e) {
    console.log(e.target);
    if (e.target.scrollTop >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    // console.log(e.target['scrollingElement'].scrollTop);
<<<<<<< HEAD
  }
  constructor(private breakpointObserver: BreakpointObserver) {
=======
  } constructor(private breakpointObserver: BreakpointObserver) {
>>>>>>> 51e6e6b0037cb9033a23ea946bb8eeb0a90babee
    const layoutChanges = breakpointObserver.observe([
      '(orientation: portrait)',
      '(orientation: landscape)',
    ]);

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      '(max-width: 960px)'
    ]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  ngOnInit() {
    this.isScrolled = window.pageYOffset >= 200;
  }
}
