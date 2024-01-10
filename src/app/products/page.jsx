"use client"
import Navbar from '@/Components/Navbar';
import { AuthContext } from '@/providers/authprovider';
import React, { useContext } from 'react';


const index = () => {
const {user} = useContext(AuthContext)
console.log(user)
    return (
        <>
<Navbar />
            This is products index page
        </>
    );
};

export default index;