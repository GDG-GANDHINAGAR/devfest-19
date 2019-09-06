import { Component, OnInit, Input } from '@angular/core';
import { TeamConfig } from 'src/app/models/team.model';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDialogueComponent } from '../speaker-dialogue/speaker-dialogue.component';
@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.sass']
})
export class TeamCardComponent implements OnInit {

  @Input() isHomePage = false;
  @Input() config: TeamConfig;

  constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(SpeakerDialogueComponent, {
  //     width: '95%',
  //     height: '80%',
  //     panelClass: 'mat-dialog',
  //     maxWidth: '1000px',
  //     maxHeight: '600px',
  //     autoFocus: false,
  //     minWidth: '300px',
  //     data: { ...this.config }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }

  ngOnInit() { }
}
