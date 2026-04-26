"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navlink = ({ href, className, children }) => {
    const pathname = usePathname();
    console.log(pathname, 'Pthname')

    const isActive = href === pathname

    return (<Link href={href} className={`${isActive ? "border-b-2 border-b-Pink-700" : ""} ${className}`}>{children}</Link>);
};

export default Navlink;