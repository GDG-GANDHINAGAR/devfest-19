import { Component, OnInit } from '@angular/core';
import { TeamConfig, TeamModel } from 'src/app/models/team.model';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.sass']
})
export class TeamPageComponent implements OnInit {
  teamDocRef: AngularFirestoreDocument<TeamModel>;
  team: TeamModel;

  constructor(private afs: AngularFirestore) {
<<<<<<< HEAD
    this.teamCollectionRef = this.afs.collection<TeamConfig>('team');
    this.team$ = this.teamCollectionRef.valueChanges();
=======
    this.teamDocRef = this.afs.doc<TeamModel>('team/data');
    this.teamDocRef.valueChanges().subscribe(data => {
      this.team = data;
      console.log(this.team);
    });
>>>>>>> b3613a33ea602e1a4eacd9c762c13594f7d0f84e
  }
  ngOnInit() {
  }

}
