import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="flex justify-center items-center p-4 bg-gray-800 text-white space-x-8">
            <a
                href="https://github.com/chrisfcb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white text-lg hover:text-orange-500 transition-colors"
            >
                <FaGithub className="mr-2 text-2xl" />
                <span>GitHub</span>
            </a>
            <a
                href="https://www.linkedin.com/in/philip-buhrs-739a1b287/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white text-lg hover:text-orange-500 transition-colors"
            >
                <FaLinkedin className="mr-2 text-2xl" />
                <span>LinkedIn</span>
            </a>
        </footer>
    );
};

export default Footer;