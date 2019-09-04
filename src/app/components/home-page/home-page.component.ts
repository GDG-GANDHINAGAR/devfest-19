import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore } from '@angular/fire/firestore';
import { config } from 'util/keyConfig';
import { Observable } from 'rxjs';
import { HomePageData, PreviousSpeakers, Speakers } from 'src/app/models/interfaces';
=======
import { HomepageConfig } from 'src/app/models/homepage.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
>>>>>>> 5b493e0c9e4e0bd7fbd8a58032344573e9639262

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
<<<<<<< HEAD
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
=======
  homepageDocRef: AngularFirestoreDocument<HomepageConfig>;
  homepage: Observable<HomepageConfig>;
>>>>>>> 5b493e0c9e4e0bd7fbd8a58032344573e9639262

  constructor( private afs: AngularFirestore ) {
    this.homepageDocRef = this.afs.doc<HomepageConfig>('homepage/event-details');
    this.homepage = this.homepageDocRef.valueChanges();
  }
  ngOnInit() {
  }

}

