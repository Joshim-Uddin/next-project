import React from 'react';
import { FaHandshake } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
const Characterstic = () => {
    return (
        <div className='bg-slate-200 text-black font-semibold md:py-16 py-5'>
            <h3 className='md:text-4xl text-2xl text-center'>We Are Different</h3>
            <hr className='md:border-4 border-2 border-[#FEC400] w-72 mx-auto mt-2'/>
            <div className='flex md:flex-row flex-col justify-between items-center md:w-4/5 mx-auto md:mt-16 mt-4 gap-5'>
                <div className='bg-red-200 py-3 md:px-5 px-3 flex flex-col items-center md:w-96 rounded-md'>
                    <FaHandshake className="md:text-8xl text-5xl"/>
                    <p className='md:text-4xl text-3xl text-center'>10K+ Customer<br /><span className='text-2xl block mt-4'>We Are Committed</span></p>
                </div>
                <div className='bg-red-200 py-3 md:px-5 px-3 flex flex-col items-center md:w-96 rounded-md'>
                <TbTruckDelivery className="md:text-8xl text-5xl"/>
                <p className='md:text-4xl text-3xl text-center'>Quick Delivery<br /><span className='text-2xl block mt-4'>We Always Provide</span></p>
                </div>
                <div className='bg-red-200 py-3 md:px-5 px-3 flex flex-col items-center md:w-96 rounded-md'>
                <MdOutlineSupportAgent className="md:text-8xl text-5xl"/>
                <p className='md:text-4xl text-3xl text-center'>24/7 Hours<br /><span className='text-2xl block mt-4'>Our Support For You</span></p>
                </div>
            </div>
        </div>
    );
};

export default Characterstic;