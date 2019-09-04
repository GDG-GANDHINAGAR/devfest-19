import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from 'util/keyConfig';
import { Observable } from 'rxjs';
import { HomePageData, PreviousSpeakers, Speakers } from 'src/app/models/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  homePageData: HomePageData = <HomePageData>{};
  previousSpeakers: PreviousSpeakers = <PreviousSpeakers>{};
  speakers: Speakers = <Speakers>{};
  constructor(private db: AngularFirestore) {
    console.log(this.homePageData);
    db.doc<HomePageData>('homepage/data').valueChanges().subscribe(data => {
      this.homePageData = data;
    });
    db.doc<PreviousSpeakers>('previous_speakers/data').valueChanges().subscribe(data => {
      this.previousSpeakers = data;
    });
    db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
      this.speakers = data;
    });

  }
  ngOnInit() {
  }

}

