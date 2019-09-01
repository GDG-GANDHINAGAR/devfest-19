import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SpeakerConfig } from 'src/app/models/speaker.model';

@Component({
  selector: 'app-speaker-dialogue',
  templateUrl: './speaker-dialogue.component.html',
  styleUrls: ['./speaker-dialogue.component.sass']
})
export class SpeakerDialogueComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<SpeakerDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SpeakerConfig) {console.log(data); }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
