import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/"></Link></li>
            </ul>
        </div>
    );
};

export default Navbar;