'use client'
import {useEffect, React} from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import googleSignIn from '@/Components/googleSignIn';
import GoogleSignIn from '@/Components/googleSignIn';

const page = ()=>{
    useEffect(() => {
        loadCaptchaEnginge(6,"black", "white")
      }, [])
      const handleLogin = (e) => {
          e.preventDefault()
          const email = e.target.email.value;
          const password = e.target.password.value;
          const captcha = e.target.captcha.value;
          if(validateCaptcha(captcha)=== true){
            console.log(email, password, captcha);
          }
          
      }
return <>
<div className='bg-purple-100 h-screen flex justify-center items-center'>
<form onSubmit={handleLogin} className='flex flex-col gap-3 justify-center items-center bg-white text-orange-700 shadow-md p-5 max-w-[75%] mx-auto rounded-lg'>
    <h2 className='mb-4 text-3xl font-semibold uppercase'>Login Now</h2>
   <div className='w-full mx-auto'>
   <label htmlFor="email">Email :</label> <input className='border w-full border-black p-2 rounded-md' type="email" name='email' placeholder='Enter your Email here...' />
   </div>
   <div className='w-full mx-auto'>
   <label htmlFor="password">Password :</label> <input className='w-full border border-black p-2 rounded-md' type="password" placeholder='Password Here...' name="password" id="password" />
    </div>
    <div className='flex flex-col justify-center items-center w-full'>
        <div className='w-full mx-auto mb-2'>
        <input className='w-full border border-black p-2 rounded-md' type="text" name='captcha' placeholder='Type the Captcha' />
        </div>
        <LoadCanvasTemplate reloadColor="purple"/>
    </div>
    <div>
        <button type='submit' className='py-2 px-4 uppercase text-white bg-blue-700 rounded-md' >Login</button>
    </div>
    <div className='flex items-center justify-between gap-5'>
        <p>Don&apos;t have account?</p>
        <a href="/signup">Sign Up</a>
    </div>
    <div>
    <GoogleSignIn />
    </div>
</form>
</div>
</>
}

export default page;