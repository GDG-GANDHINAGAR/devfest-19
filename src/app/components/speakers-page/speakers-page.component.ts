import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Speakers } from 'src/app/models/interfaces';
import { SpeakerCardComponent } from 'src/app/elements/speaker-card/speaker-card.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-speakers-page',
    templateUrl: './speakers-page.component.html',
    styleUrls: ['./speakers-page.component.sass']
})
export class SpeakersPageComponent implements OnInit {
    isMobile: boolean;
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
    constructor(private breakpointObserver: BreakpointObserver, private db: AngularFirestore) {
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
                    else if (ele.track == 'ml') {
                        this.ml.push(ele);
                    } else {
                        this.others.push(ele);
                    }
                    return true
                })
            }
        });
        const layoutChanges = breakpointObserver.observe([
            '(orientation: portrait)',
            '(orientation: landscape)',
          ]);
      
          this.breakpointObserver.observe([
            Breakpoints.Handset,
            Breakpoints.Tablet,
            '(max-width: 960px)'
          ]).subscribe(result => {
            if (result.matches) {
              this.isMobile = true;
            } else {
              this.isMobile = false;
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