import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Login with</h1>
            <div className='flex flex-col m-2'>
                <button className='btn border-blue-600 text-blue-600'><FaGoogle />Login with googl</button>
                <button className='btn'><FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;