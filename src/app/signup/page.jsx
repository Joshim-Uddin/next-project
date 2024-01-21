'use client'

import React, { useState } from "react";
import GoogleSignIn from "@/Components/googleSignIn";
import { FaCamera, FaImage, FaUpload } from "react-icons/fa6";


const page = ()=>{
    const [clicked, setClicked] = useState(false)
    const handleImageClick = ()=>{
        setClicked(true)
    }
    const handleSignUp = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
          console.log(email, password);
    }
    return (
        <div className='bg-purple-100 min-h-screen flex justify-center items-center'>
<form onSubmit={handleSignUp} className='flex flex-col gap-3 justify-center items-center bg-white text-orange-700 shadow-md p-5 max-w-[50%] mx-auto rounded-lg'>
    <h2 className='mb-4 text-3xl font-semibold uppercase'>Create Account</h2>
    {/* <div className="w-full mx-auto">
        <label htmlFor="image">Upload your image</label><input type="file" name="image" id="image" />
    </div> */}

    {/*Custom image upload starts here */}
    <div className="flex flex-col justify-center items-center">
        {clicked?<div className="flex justify-center items-center gap-2"><button className="flex flex-col justify-center items-center gap-2"><FaCamera className="text-3xl"/>From Camera</button>
        <p className="mx-5">OR</p>
        <button className="flex flex-col justify-center items-center gap-2"><FaUpload className="text-3xl"/>From File</button></div>:<><button onClick={handleImageClick}><FaImage className="text-3xl"/></button><p>Upload Image</p></>}
        
    </div>
    {/*Custom image upload ends here */}

   <div className='w-full mx-auto'>
   <label htmlFor="fullname">Full Name :</label> <input className='border w-full border-black p-2 rounded-md' type="text" name='fullname' placeholder='Your Full Name...' />
   </div>
   <div className='w-full mx-auto'>
   <label htmlFor="email">Email :</label> <input className='border w-full border-black p-2 rounded-md' type="email" name='email' placeholder='Enter your Email here...' />
   </div>
   <div className='w-full mx-auto'>
   <label htmlFor="password">Password :</label> <input className='w-full border border-black p-2 rounded-md' type="password" placeholder='Password Here...' name="password" id="password" />
    </div>
   <div className='w-full mx-auto'>
   <label htmlFor="cpassword">Confirm Password :</label> <input className='w-full border border-black p-2 rounded-md' type="password" placeholder='Retype Password Here...' name="cpassword" id="cpassword" />
    </div>
    <div>
        <button type='submit' className='py-2 px-4 uppercase text-white bg-blue-700 rounded-md' >Sign Up</button>
    </div>
    <div className='flex items-center justify-between gap-5'>
        <p>Already have account?</p>
        <a href="/login">Login</a>
    </div>
    <div className="relative w-full flex justify-center items-center my-5">
    <p className="text-xl font-bold bg-white text-center absolute z-10 w-14">OR</p>
    <div className="border-2 border-black w-full absolute mx-4"></div>
    </div>
    <GoogleSignIn />
</form>
  
</div>
    )
}
export default page;