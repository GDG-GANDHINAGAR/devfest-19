import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent {
  email: String;
  displayName: String;
  photoURL: String;
  hasData = false;
  isLoggedin = false;
  uid = '';
  isSubscribed: any = false;
  constructor(private auth: AuthService) {
    auth.user.subscribe(userData => {
      this.hasData = true;
      if (userData) {
        this.isLoggedin = true;
        console.log(userData);
        this.email = userData.email;
        this.displayName = userData.displayName;
        this.photoURL = userData.photoURL;
        this.uid = userData.uid;
        auth.isSubscribed(userData.uid).subscribe(isSubscribed => {
          console.log(`sub: ${isSubscribed}`);
          this.isSubscribed = isSubscribed;
        });
      } else {
        this.isLoggedin = false;
      }
    });
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
