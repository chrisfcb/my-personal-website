"use client"; // Add this line

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    // Remove this part to get rid of animation
    const fullText = "Thanks for visiting my website";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayText(fullText.substring(0, index + 1)); // Update the text correctly
                index++;
            } else {
                clearInterval(typingInterval); // Stop the interval when done
            }
        }, 100); // Adjust the typing speed (milliseconds)

        return () => clearInterval(typingInterval); // Clean up on component unmount
    }, []);

    return (
        <section id="hero" className="bg-gray-900 text-white p-10 min-h-screen flex items-center">
            {/* Container for hero section content */}
            <div className="flex-1 text-center"> {/* Allow text to take remaining space */}
                {/* Heading */}
                <h1 className="text-5xl font-bold">Hi, I'm Philip (aka Chris)</h1>
                {/* Sub-heading or description with typing effect */}
                <p className="mt-4 text-lg">{displayText}</p>
                {/* Call-to-action button */}
                <a href="#portfolio" className="mt-6 inline-block bg-orange-500 px-5 py-2 text-white rounded">
                    View My Work
                </a>
            </div>
            {/* Add an image using the Next.js Image component */}
            <div className="flex-shrink-0 mr-40"> {/* Prevent image from shrinking */}
                <Image
                    src="/profile.jpg" // Path to your image file in the public folder
                    alt="Profile Picture"
                    width={340} // Set the desired width (make it larger)
                    height={340} // Set the desired height (make it larger)
                    className="rounded-full" // Tailwind CSS classes for styling (rounded)
                />
            </div>
        </section>
    );
};

export default Hero;
