import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className='md:py-16 py-5 bg-[#FEC800]'>
            <h3 className='md:text-4xl text-2xl text-black font-semibold text-center'>Our Partners</h3>
            <hr className='md:border-4 border-2 border-[#ffffff] w-52 mx-auto mt-2 mb-8'/>
            <Marquee autoFill={true} speed={40} pauseOnHover={true}>
            <Image src="https://i.ibb.co/ZhWZwRh/amazon.png" alt="" width={200} height={200} className='mr-8'></Image>
            <Image src="https://i.ibb.co/ZN5ypfc/google.png" alt="" width={200} height={200} className='mr-8'></Image>
            <Image src="https://i.ibb.co/Vm12WpX/netflix.png" alt="" width={200} height={200} className='mr-8'></Image>
            <Image src="https://i.ibb.co/ZX53kKg/himalaya.png" alt="" width={200} height={200} className='mr-8'></Image>
            <Image src="https://i.ibb.co/chGbyyG/vercel.png" alt="" width={200} height={200} className='mr-8'></Image>
            <Image src="https://i.ibb.co/ZX53kKg/himalaya.png" alt="" width={200} height={200} className='mr-8'></Image>
        </Marquee>
        </div>
    );
};

export default Partners;