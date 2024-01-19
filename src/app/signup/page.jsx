'use client'
import React from "react";

const page = ()=>{
    const handleSignUp = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        
          console.log(email, password);
    }
    return (
        <div className='bg-purple-100 h-screen flex justify-center items-center'>
<form onSubmit={handleSignUp} className='flex flex-col gap-5 justify-center items-center bg-white text-orange-700 shadow-md p-5 max-w-[50%] mx-auto rounded-lg'>
    <h2 className='my-4 text-3xl font-semibold uppercase'>Create Account</h2>
   <div className='w-full mx-auto'>
   <label htmlFor="email">Email :</label> <input className='border w-full border-black p-2 rounded-md' type="email" name='email' placeholder='Enter your Email here...' />
   </div>
   <div>
   <label htmlFor="password">Password :</label> <input className='w-full border border-black p-2 rounded-md' type="password" placeholder='Password Here...' name="password" id="password" />
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
<button className="px-3 py-2 bg-blue-500 text-white rounded-md">Sign In With Google</button>
</form>
</div>
    )
}
export default page;