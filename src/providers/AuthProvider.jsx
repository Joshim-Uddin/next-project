"use client"
import React, { createContext } from 'react';
import app from '../Firebase/Firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext(null)
const googlProvider = new GoogleAuthProvider(auth)
const AuthProvider = ({children}) => {

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googlProvider)
    }
    const authInfo = {googleSignIn, user:'Sakib'}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;