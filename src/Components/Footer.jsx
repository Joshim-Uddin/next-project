import React from 'react';
import { FaSquareFacebook, FaSquareInstagram, FaSquareTwitter, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-black md:py-12 py-5 md:px-12 px-5 flex md:flex-row flex-col items-center justify-between gap-5'>
            <div>
            <h3 className='text-white md:text-4xl text-2xl'>Next <span className='text-purple-600'>Shop</span></h3>
           <div className='flex justify-start items-center gap-4 mt-5'>
           <a href="https://www.facebook.com" target='_blank'>
            <FaSquareFacebook className="md:text-3xl text-xl text-white"/>
            </a>
            <a href="https://www.twitter.com" target='_blank'>
            <FaSquareTwitter className="md:text-3xl text-xl text-white"/>
            </a>
            <a href="https://www.instagram.com" target='_blank'>
            <FaSquareInstagram className="md:text-3xl text-xl text-white"/>
            </a>
            <a href="https://www.linkedin.com" target='_blank'>
            <FaLinkedin className="md:text-3xl text-xl text-white"/>
            </a>
           </div>
            </div>
            <div className='text-white'>
                <p className='mb-4'>Contact Us from 9.00 am to 10.00 pm weedays.</p>
                <p>Email Us: joshimuddin1831@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;