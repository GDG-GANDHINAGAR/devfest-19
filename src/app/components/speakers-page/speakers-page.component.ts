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


    ngOnInit() {
        this.web_Active = false;
        this.mobile_Active = false;
        this.ml_Active = false;
        this.cloud_Active = false;
        this.others_Active = false;
    }

}