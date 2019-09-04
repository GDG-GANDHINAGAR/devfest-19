import { Component, OnInit } from '@angular/core';
import { HomepageConfig } from 'src/app/models/homepage.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  homepageDocRef: AngularFirestoreDocument<HomepageConfig>;
  homepage: Observable<HomepageConfig>;

  constructor( private afs: AngularFirestore ) {
    this.homepageDocRef = this.afs.doc<HomepageConfig>('homepage/event-details');
    this.homepage = this.homepageDocRef.valueChanges();
  }
  ngOnInit() {
  }

}
