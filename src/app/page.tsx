import Image from 'next/image';
import Portfolio from '../components/Portfolio/Portfolio';
import Hero from '../components/Hero/Hero';
import About from '@/components/About/About';
import Timeline from '@/components/Timeline/Timeline';
import Contact from '@/components/Contact/Contact';


// Example of a simple homepage layout in Next.js with Tailwind CSS
export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <Hero />
        
        {/* Portfolio Section */}
        <Portfolio />
  
        {/* About Me Section */}
        <About />  

        {/* Timeline Section */}
        <Timeline />   

        {/* Contact Section */}
        <Contact />
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white p-6 text-center">
          <p>&copy; 2024 Chris. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  