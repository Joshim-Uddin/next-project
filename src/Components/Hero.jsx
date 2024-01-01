import Image from 'next/image';
import React from 'react';


const Hero = () => {
    return (
        <div className='md:h-screen flex md:flex-row flex-col-reverse justify-center gap-5 items-center md:py-12 py-6 md:w-10/12 mx-auto '>
            <div className='md:w-3/5 px-3 flex flex-col md:gap-4 gap-2 justify-center'>
            <h3 className='md:text-4xl text-xl text-blue-600 font-bold'>Welcome to</h3>
            <h1 className='md:text-7xl text-3xl text-purple-600 font-bold'>the Next Shop</h1>
            <p className='md:w-3/4 mt-4 md:text-2xl text-base md:text-left text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button className='w-1/3 max-[600px]:mx-auto bg-blue-700 text-white p-2 rounded-md mt-5 hover:bg-red-400 hover:transition'>Visit Shop</button>
            </div>
            <Image src="/9240592.jpg" alt='image of shop' width={500}
      height={500} priority={true} className='md:w-2/5'></Image>
        </div>
    );
};

export default Hero;