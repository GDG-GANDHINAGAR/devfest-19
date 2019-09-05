import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Speakers } from 'src/app/models/interfaces';
import { SpeakerCardComponent } from 'src/app/elements/speaker-card/speaker-card.component';

@Component({
  selector: 'app-speakers-page',
  templateUrl: './speakers-page.component.html',
  styleUrls: ['./speakers-page.component.sass']
})
export class SpeakersPageComponent implements OnInit {
  speakers: Speakers = <Speakers>{};
  constructor(private db: AngularFirestore) {
    db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
      this.speakers = data;
    });
  }

  ngOnInit() {
  }

}
