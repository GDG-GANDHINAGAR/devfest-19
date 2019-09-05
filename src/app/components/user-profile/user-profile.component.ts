import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent {

  name = 'Arif'
  description = "Hi my name is arif and I'm a Web developer"
  date = '6 September 2019'
  constructor() {
  }

}
