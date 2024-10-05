// src/components/Navbar.tsx

import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link href="/" className="text-white hover:text-gray-400 mx-2">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-gray-400 mx-2">
                        About
                    </Link>
                    <Link href="/portfolio" className="text-white hover:text-gray-400 mx-2">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="text-white hover:text-gray-400 mx-2">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
