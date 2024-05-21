import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = () => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        setUser(currentUser)
        console.log(currentUser)
      }
    });
    return () => {
      return unsubscribe();
    }
  },[])
  const authInfo = {googleLogin, user, createUser, signIn}
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider