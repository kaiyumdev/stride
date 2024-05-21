import React, { createContext } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const authInfo = {googleLogin}
  return (
    <AuthContext value={googleLogin}>{children}</AuthContext>
  )
}

export default AuthProvider