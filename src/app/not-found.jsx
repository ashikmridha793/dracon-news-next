import Link from 'next/link';
import React from 'react';

const NoutFound = () => {
    return (
        <div className='text-center h-[80vh] flex justify-center item-center flex-col gap-5'>
            <h1 className='font-bold text-8xl text-green-950 text-center'>404 </h1>
            <h2 className='text-xl font-semibold'>This page is not found</h2>
            <Link href='/'><button className='btn btn-ghost bg-purple-900 text-white'>Go Home</button></Link>
        </div>
    );
};

export default NoutFound;