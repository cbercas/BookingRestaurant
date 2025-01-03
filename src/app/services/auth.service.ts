import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider,authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:Auth) { }

  register({email,password}:any){
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth,email,password);
  }

  loginWithGoogle(){
    return signInWithPopup(this.auth,new GoogleAuthProvider());
  }

  getAuthState() {
    return authState(this.auth);
  }

  logout(){
    return signOut(this.auth)
  }

}
