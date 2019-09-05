import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomePageData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  subscribeForm: FormGroup;
  homePageData: HomePageData;
  footerData= [];
  constructor(private db: AngularFirestore) {
    db.doc<HomePageData>('homepage/data').valueChanges().subscribe(data => {
      this.homePageData = data;
      this.footerData= [];
      Object.keys(this.homePageData.footer).forEach(key => {
        const sponsorData = {
          key: key,
          data: this.homePageData.footer[key]
        };
        this.footerData.push(sponsorData);
      });
    });
    this.subscribeForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  subscribe() {
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.controls['email']);
      // let result = this.email.addEmails({ 'EmailId': this.subscribeForm.controls['email'].value });
      // M.toast({ html: 'Thank you for subscribing!' })
    } else {
      // M.toast({ html: 'Please enter valid email ' })
    }
  }


}
