import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { TeamPageComponent } from './components/team-page/team-page.component';
import { SpeakersPageComponent } from './components/speakers-page/speakers-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HomePageHeaderComponent } from './elements/home-page-header/home-page-header.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'team', component: TeamPageComponent },
  { path: 'speakers', component: SpeakersPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'sign-in', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
