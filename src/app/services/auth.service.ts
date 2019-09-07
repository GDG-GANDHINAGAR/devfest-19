import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/interfaces'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          console.log(user);

          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }
  googleSignin() {
    const sub = new Subject();
    const provider = new auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then(data => {
      sub.next(this.updateUserData(data.user));
    });
    return sub.asObservable();
  }
  subscribe(uid, val) {
    const sub = new Subject();
    const userRef: AngularFirestoreDocument = this.afs.doc(`users/${uid}`);
    const data = {
      isSubscribed: val,
    };
    sub.next(userRef.update(data));
    return sub.asObservable();
  }
  isSubscribed(uid) {
    const sub = new Subject();
    this.afs.doc(`users/${uid}`).valueChanges().subscribe(data => {
      if (data['isSubscribed']) {
        sub.next(true);
      } else {
        sub.next(false);
      }
    });
    return sub.asObservable();
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      isSubscribed: true
    };
    return userRef.set(data, { merge: true });

  }

  signOut() {
    return of(this.afAuth.auth.signOut());
  }
}
