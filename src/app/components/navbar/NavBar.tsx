"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from '../navLink/NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import MenuOverlay from '../menuOverlay/MenuOverlay';
import Image from 'next/image';

export const navbarLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Skills",
        path: "/skills"
    },
    {
        title: "Projects",
        path: "/my-projects"
    },
    {
        title: "Contact",
        path: "/contact"
    },
];

const Navbar: React.FC = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-gradient-to-r from-gray-800 to-gray-900'>
        <div className='flex flex-wrap items-center justify-between px-4 py-2'>
            <Link href="/" className='bg-gradient-to-r from-indigo-600 via-teal-500 to-teal-400 rounded-full p-1'>
                    <Image 
                        src="/images/logo.webp"
                        alt="Logo Image"
                        width={40}
                        height={40} 
                        className='rounded-full'
                    />
                </Link>
                <div className='block md:hidden'>
                    <button 
                        onClick={() => setIsNavbarOpen(prev => !prev)} 
                        className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-pink-500 hover:border-purple-700'
                        aria-label={isNavbarOpen ? "Close menu" : "Open menu"}
                    >
                        {isNavbarOpen ? (
                            <XMarkIcon className="h-5 w-5" />
                        ) : (
                            <Bars3Icon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div className='hidden md:block pt-6 pr-6' id='navbar'>
                    <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
                        {navbarLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isNavbarOpen && <MenuOverlay links={navbarLinks} />}
        </nav>
    );
}

export default Navbar;
