"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data)
    }
    const handleGithubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });

        console.log(data)
    }

    return (
        <div>
            <h1 className='font-bold text-xl'>Login with</h1>
            <div className='flex flex-col m-2'>
                <button
                    onClick={handleGoogleSignin}
                    className='btn border-blue-600 text-blue-600'>
                    <FaGoogle />Login with googl</button>
                <button
                    onClick={handleGithubSignin}
                    className='btn'>
                    <FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;