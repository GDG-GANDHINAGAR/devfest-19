import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'

export interface Item { name: string; }

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
    // console.log(e.target);
    if (e.target.scrollTop >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    // console.log(e.target['scrollingElement'].scrollTop);
  }
  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) {
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
