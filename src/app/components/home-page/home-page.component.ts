import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from 'util/keyConfig';
import { Observable } from 'rxjs';
import { HomePageData, PreviousSpeakers, Speakers } from 'src/app/models/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { auth } from 'firebase';

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
  constructor(private db: AngularFirestore, private auth: AuthService) {
    db.doc<HomePageData>('homepage/data').valueChanges().subscribe(data => {
      this.homePageData = data;
      this.sponsors = [];
      Object.keys(this.homePageData.sponsors).forEach(key => {
        const sponsorData = {
          key: key,
          data: this.homePageData.sponsors[key]
        };
        console.log(sponsorData);
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
   async usersub() {
    // await this.auth.googleSignin();
  }
  ngOnInit() {
  }

}

