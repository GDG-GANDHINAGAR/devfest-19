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
  core = [];
  teams = [];
  constructor(private afs: AngularFirestore) {
    this.teamDocRef = this.afs.doc<TeamModel>('team/data');
    this.teamDocRef.valueChanges().subscribe(data => {
      this.team = {
        data: data.data.filter(ele => {
          // console.log(ele.index, ele.name)
          if (ele.core) {
            this.core.push(ele);
            this.core.sort((a, b) => (a.index > b.index) ? 1 : -1)
            return false;
          }
          // console.log(ele)
          this.teams.push(ele);
          this.teams.sort((a, b) => (a.index > b.index) ? 1 : -1)
          return true;
        })
      };
      // console.log(this.team);
    });

    console.log(this.core);
  }
  
  
  ngOnInit() {

  }

}
