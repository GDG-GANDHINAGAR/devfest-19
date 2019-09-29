import { Component, OnInit, Input, Pipe } from '@angular/core';
import { SpeakerConfig } from 'src/app/models/speaker.model';
import { MatDialog } from '@angular/material/dialog';
import { SpeakerDialogueComponent } from '../speaker-dialogue/speaker-dialogue.component';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.sass']
})
export class SpeakerCardComponent implements OnInit {
  @Input() isHomePage = false;
  @Input() config: SpeakerConfig;

  constructor(public dialog: MatDialog) {

  }

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

@Pipe({
  name: 'EnabledSpeaker',
})
export class EnabledSpeaker {

  transform(objects: any[]): any[] {
      if(objects) {
          return objects.filter(object => {
              return object.show;
          });
      }
  }

}

@Pipe({
  name: 'FeaturedSpeaker',
})
export class FeaturedSpeaker {

  transform(objects: any[]): any[] {
      if(objects) {
          return objects.filter(object => {
              return object.is_featured;
          });
      }
  }

}
