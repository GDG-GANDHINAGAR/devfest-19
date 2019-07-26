import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule, RippleGlobalOptions, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { SpeakerCardComponent } from './elements/speaker-card/speaker-card.component';
import { PreviousSpeakerCardComponent } from './elements/previous-speaker-card/previous-speaker-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { globalRippleConfig } from './mat-config';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppBarComponent } from './elements/app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeakerCardComponent,
    PreviousSpeakerCardComponent,
    HomePageComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRippleModule,
    MatToolbarModule
  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
