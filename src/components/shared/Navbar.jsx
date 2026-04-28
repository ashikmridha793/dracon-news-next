import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from '../../assets/user.png'
import Navlink from './Navlink';
const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto gap-2 my-2'>
            <div></div>
            <ul className='flex gap-5 justify-between items-center'>
                <li className='text-gray-700 font-bold'><Navlink href="/">Home</Navlink></li>
                <li className='text-gray-700 font-bold'><Navlink href="/about-us">About</Navlink></li>
                <li className='text-gray-700 font-bold'><Navlink href="/career" className="text-purple-800">Career</Navlink></li>
            </ul>
            <div className='flex items-center gap-2'>
                <Image src={userAvatar} alt='User abater' width={50} height={50} />
                <button className='btn bg-pink-700 text-white'><Link href='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;