'use client'
import React, { useEffect, useState } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [clicked , setClicked] = useState(false)
    console.log(clicked)
    return (
        <nav className={clicked?'flex justify-between items-center py-5 bg-amber-400 md:px-16 px-5 mb-36':'flex justify-between items-center py-5 bg-amber-400 md:px-16 px-5 '}>
            <h3 className='md:text-3xl text-xl font-semibold text-white'>Next <span className='text-violet-400 font-bold'>Project</span></h3>
            <div>
                <div className="min-[600px]:hidden min-[600px]:mr-4" onClick={()=>setClicked(!clicked)}>
                <FaBarsStaggered />
                </div>
            <ul className={clicked?'flex md:flex-row flex-col justify-center items-center py-2 gap-4 text-base absolute top-16 left-0 w-full bg-amber-400 text-white':'flex flex-row gap-4 text-xl max-[600px]:absolute max-[600px]:-top-48 max-[600px]:-left-48'}>
                <li className='max-[600px]:'><a href="#">Home</a></li>
                <li className='max-[600px]:'><a href="#">Products</a></li>
                <li className='max-[600px]:'><a href="#">About</a></li>
                <li className='max-[600px]:'><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;