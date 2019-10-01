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
    web_Active;
    mobile_Active;
    ml_Active;
    cloud_Active;
    others_Active;
    webCount;
    mobileCount;
    mlCount;
    cloudCount;
    othersCount;
    constructor(private db: AngularFirestore) {
        db.doc<Speakers>('speakers/data').valueChanges().subscribe(data => {
            this.speakers = {
                enabled: data.enabled,
                data: data.data.filter(ele => {
                    // console.log(ele);
                    if (ele.track == 'mobile') {
                        console.log(ele.track);
                        this.mobile.push(ele);
                    }
                    else if (ele.track == 'web') {
                        console.log(ele.track);
                        this.web.push(ele);
                    }
                    else if (ele.track == 'cloud') {
                        console.log(ele.track);
                        this.cloud.push(ele);
                    }
                    else if (ele.track == 'ml') {
                        console.log(ele.track);
                        this.ml.push(ele);
                    } else {
                        console.log(ele.track);
                        this.others.push(ele);
                    }
                    return true
                })
            }
        });

    }
    webActive(value) {
        this.webCount += value;
        if (this.webCount % 2 == 0) {
            this.web_Active = false;
        } else {
            this.web_Active = true;
        }
    }
    mobileActive(value) {
        this.mobileCount += value;
        if (this.mobileCount % 2 == 0) {
            this.mobile_Active = false;
        } else {
            this.mobile_Active = true;
        }
    }
    mlActive(count) {
        this.mlCount += count;
        if (this.mlCount % 2 == 0) {
            this.ml_Active = false;
        } else {
            this.ml_Active = true;
        }
    }
    cloudActive(value) {
        this.cloudCount += value;
        if (this.cloudCount % 2 == 0) {
            this.cloud_Active = false;
        } else {
            this.cloud_Active = true;
        }
    }
    othersActive(value) {
        this.othersCount += value;
        if (this.othersCount % 2 == 0) {
            this.others_Active = false;
        } else {
            this.others_Active = true;
        }
    }

    ngOnInit() {
        this.web_Active = false;
        this.mobile_Active = false;
        this.ml_Active = false;
        this.cloud_Active = false;
        this.others_Active = false;
        this.webCount = 0;
        this.mobileCount = 0;
        this.mlCount = 0;
        this.cloudCount = 0;
        this.othersCount = 0;
    }

}