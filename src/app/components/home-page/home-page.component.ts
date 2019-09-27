import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomePageData, PreviousSpeakers, Speakers } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  homePageData: HomePageData = <HomePageData>{};
  previousSpeakers: PreviousSpeakers = <PreviousSpeakers>{};
  speakers: Speakers = <Speakers>{};
  sponsors = [];
  hasData: boolean;
  isLoggedin: boolean;
  email: string;
  displayName: string;
  uid: string;
  isSubscribed: any = false;
  regLink: string;
  registration: boolean = false;
  elseString: string;
  constructor(private db: AngularFirestore, private auth: AuthService) {
    this.auth.user.subscribe(userData => {
      this.hasData = true;
      if (userData) {
        this.isLoggedin = true;
        // console.log(userData);
        this.uid = userData.uid;
        this.email = userData.email;
        this.auth.isSubscribed(userData.uid).subscribe(isSubscribed => {
          // console.log(`sub: ${isSubscribed}`);
          this.isSubscribed = isSubscribed;
        });
      } else {
        this.isLoggedin = false;
      }
    });
    db.doc<HomePageData>('homepage/data').valueChanges().subscribe(data => {
      this.homePageData = data;
      this.sponsors = [];
      this.registration = data.registration;
      this.regLink = data.regLink;
      this.elseString = data.elseString;
      Object.keys(this.homePageData.sponsors).forEach(key => {
        const sponsorData = {
          key: key,
          data: this.homePageData.sponsors[key]
        };
        // console.log(sponsorData);
        this.sponsors.push(sponsorData);
      });
    });
    db.doc<PreviousSpeakers>('previous_speakers/data').valueChanges().subscribe(data => {
      this.previousSpeakers = data;
    });
    db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
      this.speakers = data;
    });
  }
  // sub() {
  //   // this.auth.subscribe();
  //   this.auth.user.subscribe(userData => {
  //     if (userData) {
  //       this.auth.subscribe(userData.uid, true).subscribe(data => { });
  //     }
  //   });
  // }
  usersub() {
    this.auth.googleSignin().subscribe(userData => { });
  }
  ngOnInit() {
  }

}
