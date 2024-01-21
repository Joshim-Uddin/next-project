"use client"
import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const googleLogIn = ()=>{
        console.log('clicked')
        return signInWithPopup(auth, googleProvider)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {googleLogIn, signIn, signUp, user:'name'}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;