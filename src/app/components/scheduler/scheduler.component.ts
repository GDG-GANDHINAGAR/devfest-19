import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Speakers } from 'src/app/models/interfaces';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.sass']
})
export class SchedulerComponent implements OnInit {
  schedule: Speakers = <Speakers>{};

  constructor(private db: AngularFirestore) {
    db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
      this.schedule = data;
    });
  }

  ngOnInit() {
  }

}
