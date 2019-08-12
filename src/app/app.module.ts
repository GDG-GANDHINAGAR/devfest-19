import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerCardComponent,
    PreviousSpeakerCardComponent,
    HomePageComponent,
    AppBarComponent,
    SpeakerDialogueComponent,
    ProfileIconComponent,
    TeamPageComponent,
    AboutPageComponent,
    SpeakersPageComponent,
    DataIconComponent,
    HomepageTitleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatRippleModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatIconModule,
  ],
  entryComponents: [
    SpeakerDialogueComponent
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
