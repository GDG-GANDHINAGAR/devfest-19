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
<<<<<<< HEAD
  $email = 'gdggandhinagar@gmail.com'
  constructor() { }
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
