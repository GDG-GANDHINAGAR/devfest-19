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
  team: Speakers;
  core = [];

  constructor(private db: AngularFirestore) {
    db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
      // this.speakers = {
      //   data: data.data.filter(elem => {
      //     if(elem.core) {
      //       this.core.push(elem);
      //       return false;
      //     }
      //     return true;
      //   })
      // };
    });
  }

  ngOnInit() {
  }

}
