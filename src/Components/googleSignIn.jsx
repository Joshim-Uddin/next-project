'use client'
import { AuthContext } from "@/app/AuthProvider";
import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";

const GoogleSignIn =()=>{
    const {googleLogIn} = useContext(AuthContext)
    const handleGoogleLogin = ()=>{
        googleLogIn().then((result)=>{
            const user = result.user
        }).catch((error)=>console.log(error));
    }
    
    return (
<button className="btn hover:-translate-y-[2px] px-3 py-2 bg-[#1D4ED8] text-white rounded-md flex items-center justify-center gap-2" onClick={handleGoogleLogin}><span className="text-white"><FaGoogle/></span> Sign In With Google</button>
    )
}
export default GoogleSignIn;