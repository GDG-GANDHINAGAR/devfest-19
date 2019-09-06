import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent {
  email: String;
  displayName: String;
  photoURL: String;
  constructor(public auth: AuthService) {
  }
  async usersub() {
    await this.auth.googleSignin();
  }
}
