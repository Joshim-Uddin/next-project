import Image from 'next/image';
import React from 'react';
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div className='py-8 bg-[#FEC800]'>
            <h3 className='md:text-4xl text-2xl text-center'>Our Partners</h3>
            <hr className='md:w-52 w-40 mx-auto md:mt-3 mt-2 md:border-4 border-2 border-t-orange-500'/>
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