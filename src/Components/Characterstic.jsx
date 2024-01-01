import React from 'react';
import { FaHandshake } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
const Characterstic = () => {
    return (
        <div className='bg-slate-200 text-black font-semibold md:py-12 py-5'>
            <h3 className='md:text-4xl text-2xl text-center'>We Are Different</h3>
            <hr className='md:border-4 border-2 border-[#FEC400] w-72 mx-auto mt-2'/>
            <div className='flex justify-between items-center md:w-3/5 w-3/4 mx-auto'>
                <div className='bg-red-200 py-3 px-5 '>
                    <FaHandshake className="text-8xl"/>
                    <p className='text-4xl'>10000+ Customer<br /><span className='text-2xl'>We are committed to</span></p>
                </div>
                <div>
                <TbTruckDelivery />
                </div>
                <div>
                <MdOutlineSupportAgent />
                </div>
            </div>
        </div>
    );
};

export default Characterstic;