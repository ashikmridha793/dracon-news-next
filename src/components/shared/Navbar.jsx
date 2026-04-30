"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';
const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;

    console.log(user, isPending, "user")
    return (
        <div className='flex justify-between container mx-auto gap-2 my-2'>
            <div></div>
            <ul className='flex gap-5 justify-between items-center'>
                <li className='text-gray-700 font-bold'><Navlink href="/">Home</Navlink></li>
                <li className='text-gray-700 font-bold'><Navlink href="/about-us">About</Navlink></li>
                <li className='text-gray-700 font-bold'><Navlink href="/career" className="text-purple-800">Career</Navlink></li>
            </ul>

            {isPending ? (<span className="loading loading-dots loading-xl"></span>)
                : user ? (
                    <div className='flex items-center gap-2'>
                        <h2 className='font-semibold text-lg'>
                            <i>Wellcome {user?.name}</i>
                        </h2>
                        <Image className='rounded-full' src={user?.image} alt='User abater' width={50} height={50} />
                        <button
                            className='btn bg-pink-700 text-white'
                            onClick={async() => await authClient.signOut()}
                >
                        LogOut
                    </button>
            </div>
    ) : (
        <button className='btn bg-pink-700 text-white'>
            <Link href='/login'>Login</Link>
        </button>
    )
}
        </div >
    );
};

export default Navbar;