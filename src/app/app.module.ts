import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { globalRippleConfig } from './mat-config';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PreviousSpeakerCardComponent } from './elements/previous-speaker-card/previous-speaker-card.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { SpeakerCardComponent } from './elements/speaker-card/speaker-card.component';
import { AppBarComponent } from './elements/app-bar/app-bar.component';
import { SpeakerDialogueComponent } from './elements/speaker-dialogue/speaker-dialogue.component';
import { ProfileIconComponent } from './elements/profile-icon/profile-icon.component';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';
import { DataIconComponent } from './elements/data-icon/data-icon.component';
import { HomepageTitleComponent } from './elements/homepage-title/homepage-title.component';
import { TeamCardComponent } from './elements/team-card/team-card.component';
import { TicketsComponent } from './elements/tickets/tickets.component';
import { GalleryImageComponent } from './elements/gallery-image/gallery-image.component';
import { PartnerImageComponent } from './elements/partner-image/partner-image.component';
import { FooterComponent } from './elements/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomePageHeaderComponent } from './elements/home-page-header/home-page-header.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    SpeakerCardComponent,
    PreviousSpeakerCardComponent,
    HomePageComponent,
    AppBarComponent,
    SpeakerDialogueComponent,
    UserProfileComponent,
    ProfileIconComponent,
    TeamPageComponent,
    AboutPageComponent,
    SpeakersPageComponent,
    DataIconComponent,
    HomepageTitleComponent,
    TeamCardComponent,
    TicketsComponent,
    GalleryImageComponent,
    PartnerImageComponent,
    HomePageHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    MatGridListModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    SpeakerDialogueComponent
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
