import Image from 'next/image';
import Portfolio from '../components/Portfolio';
import Hero from '../components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';


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

        {/* About Me Section */}
        <Timeline />   

  
        {/* Contact Section */}
        <section id="contact" className="p-10">
          <h2 className="text-3xl font-semibold">Contact Me</h2>
          <form className="mt-6 space-y-4">
            <input type="text" className="w-full p-2 border" placeholder="Your Name" />
            <input type="email" className="w-full p-2 border" placeholder="Your Email" />
            <textarea className="w-full p-2 border" placeholder="Your Message"></textarea>
            <button className="bg-orange-500 text-white px-5 py-2 rounded">Send Message</button>
          </form>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white p-6 text-center">
          <p>&copy; 2024 Chris. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  