import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {


      // Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
          }
          else {
            return of(null)
          }
        })
      )
    }

    googleLogin() {
      const provider  = new firebase.auth.GoogleAuthProvider()
      return this.oAuthLogin(provider);
    }

    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
          this.updateUserData(credential.user)
        })
    }

    private updateUserData(user) {
      // Sets user data to firestore on login

      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

      const data: User = {
        uid : user.uid,
        email : user.email,
        photoURL: user.photoURL,
        displayName: user.displayName,
      }

      return userRef.set(data, { merge: true })

    }

    signOut() {
      this.afAuth.auth.signOut().then(() => {
          this.router.navigate(['/']);
      });
    }
  }
