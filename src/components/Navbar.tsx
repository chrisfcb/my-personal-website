"use client"; // Add this line

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Main navigation links - Left-aligned */}
                <div className="hidden md:flex space-x-4">
                    <Link href="#hero" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="#portfolio" className="text-white hover:text-gray-400">
                        Portfolio
                    </Link>
                    <Link href="#about" className="text-white hover:text-gray-400">
                        About
                    </Link>
                    <Link href="#timeline" className="text-white hover:text-gray-400">
                        Education
                    </Link>
                    <Link href="#contact" className="text-white hover:text-gray-400">
                        Contact
                    </Link>
                </div>

                {/*
                md:hidden:

                This class hides an element when the screen size is medium (md, meaning 768px and up) or larger.
                In the code, md:hidden is applied to the mobile menu button (hamburger icon). This means the button will only be visible on screens smaller than md (below 768px), effectively making it a mobile-only menu toggle.
                */}
                {/* Hamburger Icon for Mobile - Right aligned on smaller screens */}
                <button 
                    className="text-white text-2xl md:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu - Left aligned */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-white space-y-4 p-4">
                    <Link href="#hero" className="block hover:text-gray-400" onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="#portfolio" className="block hover:text-gray-400" onClick={toggleMenu}>
                        Portfolio
                    </Link>
                    <Link href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="#timeline" className="block hover:text-gray-400" onClick={toggleMenu}>
                        Education
                    </Link>
                    <Link href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
