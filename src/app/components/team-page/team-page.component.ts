import { Component, OnInit } from '@angular/core';
import { TeamConfig, SocialMediaKind } from 'src/app/models/team.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.sass']
})
export class TeamPageComponent implements OnInit {
  teamCollectionRef: AngularFirestoreCollection<TeamConfig>;
  team$: Observable<TeamConfig[]>;

  constructor( private afs: AngularFirestore ) {
    this.teamCollectionRef = this.afs.collection<TeamConfig>('team');
    this.team$ = this.teamCollectionRef.valueChanges();
  }
  ngOnInit() {
  }

}
