import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';
import { SpeakerConfig, SocialMediaKind } from 'src/app/models/speaker.model';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDialogueComponent } from '../speaker-dialogue/speaker-dialogue.component';
import { ScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.sass']
})
export class SpeakerCardComponent implements OnInit {
  @Input() isHomePage = false;
  @Input() config: SpeakerConfig = {
    name: 'Parth Jansari',
    session: 'Flutter Animations: Motion Awakens',
    JobTitle: 'Organizer',
    tag: 'Mobile',
    company: 'GDG Gandhinagar',
    socialMediaLinks: [{ kind: SocialMediaKind.github, link: '#' }],
    image:
      'https://avatars2.githubusercontent.com/u/17850142?s=460&v=4',
    sessionData: `lets learn how to animate things in flutter with a pinch of darkside.`,
    bio: `Parth is a guy who is trying to grow up and do mature stuff and work but ends
    up designing, playing games(most of the time) or watching Movies/Tv Series.Parth has
    five years of experience in designing and two years experience in front-end
     development. Parth uses Angular for Creating frontend, ionic and Flutter to
      create hybrid apps. Parth has mastery over most of the adobe creative suite apps.
       Currently, Parth is exploring Flutter as he believes it can be a replacement for
        ionic 2 and all other hybrid app frameworks.
    `,

  };

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SpeakerDialogueComponent, {
      width: '95%',
      height: '80%',
      panelClass: 'mat-dialog',
      maxWidth: '1000px',
      maxHeight: '600px',
      autoFocus: false,
      minWidth: '300px',
      data: { ...this.config }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }


  ngOnInit() {
    // this.openDialog();
  }

}


