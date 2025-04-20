import { FaCode, FaHtml5, FaCss3, FaReact, FaDatabase, FaTools, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="bg-gray-100 p-10">
          <h2 className="text-3xl font-semibold text-black">About Me</h2>
          <p className="mt-4 text-black">
            Hello! I&#39;m an ambitious and hardworking third-year student studying 
            Informatics: Programming and System Architecture bachelor at the University of Oslo. 
            I am always eager to explore new technologies and ways to 
            develop constructive digital solutions. 
          </p>
          <p className="mt-4 text-black">
          Here are some of my technical skills:
          </p>
          <ul className="mt-2 text-black list-disc pl-6 space-y-2">
            <li className="flex items-center">
              <FaCode className="text-blue-500 mr-2" />
              Programming Languages: Java, Python, JavaScript, C
            </li>
            <li className="flex items-center">
              <FaHtml5 className="text-orange-500 mr-2" />
              Web Technologies: HTML, CSS, React, Next.js
            </li>
            <li className="flex items-center">
              <FaDatabase className="text-green-500 mr-2" />
              Database Management: SQL
            </li>
            <li className="flex items-center">
              <FaTools className="text-gray-500 mr-2" />
              Tools and Frameworks: Git, Node.js
            </li>
            <li className="flex items-center">
              <FaUsers className="text-purple-500 mr-2" />
              Soft Skills: Problem Solving, Teamwork, Communication
            </li>
          </ul>
        </section>
    );
};

export default About;