import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

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
  email: String;
  displayName: String;
  photoURL: String;
  hasData = false;
  isLoggedin = false;
  uid = '';
  isMobile: boolean;
  isSubscribed: unknown;
  @HostListener('scroll', ['$event'])
  onScroll(e) {
    if (e.target.scrollTop >= 200) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService) {

    auth.user.subscribe(userData => {
      this.hasData = true;
      if (userData) {
        this.isLoggedin = true;
        this.displayName = userData.displayName;
        this.photoURL = userData.photoURL;
        auth.isSubscribed(userData.uid).subscribe(isSubscribed => {
          this.isSubscribed = isSubscribed;
        });
      } else {
        this.isLoggedin = false;
      }
    });
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
  subscribe() {
    this.auth.subscribe(this.uid, !this.isSubscribed);

  }
  signIn() {
    this.auth.googleSignin().subscribe(data => {

    });
  }
  signOut() {
    this.auth.signOut().subscribe(data => {

    });
  }
}
