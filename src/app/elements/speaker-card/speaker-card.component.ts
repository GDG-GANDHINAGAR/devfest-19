import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';
import { SpeakerConfig } from 'src/app/models/speaker.model';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.sass']
})
export class SpeakerCardComponent implements OnInit {
  @Input() config: SpeakerConfig = {
    name: 'speaker-name',
    session: 'session-name',
    JobTitle: 'job-title',
    socialMediaLinks: [{ kind: 'github', link: '#' }],
    image: 'https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

}


