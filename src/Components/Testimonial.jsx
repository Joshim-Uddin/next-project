import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
    return (
        <div className='bg-slate-20 md:py-16 py-5'>
            <h3 className='md:text-4xl text-2xl text-center text-black font-semibold'>What Our Client Says</h3>
            <hr className='md:border-4 border-2 border-[#FEC400] md:w-80 w-48 mx-auto mt-2'/>
            <div className='flex md:flex-row flex-col md:gap-8 gap-5 justify-center items-center md:w-4/5 px-2 mx-auto text-black md:mt-12 mt-8'>
                <div className='bg-white p-3 shadow-md min-w-72 rounded-lg flex flex-col gap-8'>
                    <p className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quis quae pariatur doloremque sed praesentium voluptate consectetur facere!</p>
                    <div className='flex justify-center items-center gap-5'>
                    <Image src="https://i.ibb.co/m8HPLxX/d1.jpg" alt="" width={500} height={500} className='h-20 w-20 rounded-full'/>
                    <div>
                        <p>John Doe</p>
                        <p>CEO at Markentile</p>
                    </div>
                    </div>
                </div>
                <div className='bg-white p-3 shadow-md min-w-72 rounded-lg flex flex-col gap-8'>
                    <p className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione et recusandae molestiae blanditiis officia mollitia temporibus saepe quis ad.</p>
                <div className='flex justify-center items-center gap-5'>
                <Image src="https://i.ibb.co/5Kg4MYj/d3.jpg" alt="" width={500} height={500} className='h-20 w-20 rounded-full'/>
                    <div>
                        <p>Partik Harry</p>
                        <p>CEO at Primoson</p>
                    </div>
                </div>
                </div>
                <div className='bg-white p-3 shadow-md min-w-72 rounded-lg flex flex-col gap-8'>
                    <p className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Odio, pariatur quo? Vitae natus rerum modi! Minus adipisci nulla debitis velit!</p>
                <div className='flex justify-center items-center gap-5'>
                <Image src="https://i.ibb.co/H7bLMqz/d8.jpg" alt="" width={500} height={500} className='h-20 w-20 rounded-full'/>
                    <div>
                        <p>Kentuky Paul</p>
                        <p>MDO at Radison</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;