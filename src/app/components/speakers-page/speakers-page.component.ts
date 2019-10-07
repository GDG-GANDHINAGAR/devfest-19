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
    mobile = [];
    web = [];
    cloud = [];
    ml = [];
    others = [];
    webActive;
    mobileActive;
    mlActive;
    cloudActive;
    othersActive;
    constructor(private db: AngularFirestore) {
        db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
            this.speakers = {
                enabled: data.enabled,
                data: data.data.filter(ele => {
                    if (ele.track == 'mobile') {
                        this.mobile.push(ele);
                    }
                    else if (ele.track == 'web') {
                        this.web.push(ele);
                    }
                    else if (ele.track == 'cloud') {
                        this.cloud.push(ele);
                    }
                    else if (ele.track == 'ml') {
                        this.ml.push(ele);
                    } else {
                        this.others.push(ele);
                    }
                    return true
                })
            }
        });

    }


    ngOnInit() {
        this.webActive = false;
        this.mobileActive = false;
        this.mlActive = false;
        this.cloudActive = false;
        this.othersActive = false;
    }

}