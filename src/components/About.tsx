const About = () => {
    return (
        <section id="about" className="bg-gray-100 p-10">
          <h2 className="text-3xl font-semibold text-black">About Me</h2>
          <p className="mt-4 text-black">
          Hello! I'm an ambitious and hardworking third-year student studying 
          Informatics: Programming and System Architecture bachelor at the University of Oslo. 
          I am always eager to explore new technologies and ways to 
          develop contructive digital solutions. 
          </p>
          <p className="mt-4 text-black">
          Here are some of my technical skills:
          </p>
          <ul className="mt-2 text-black list-disc pl-6">
            <li>Programming Languages: Java, Python, JavaScript, C</li>
            <li>Web Technologies: HTML, CSS, React, Next.js</li>
            <li>Database Management: SQL</li>
            <li>Tools and Frameworks: Git, Node.js</li>
            <li>Soft Skills: Problem Solving, Teamwork, Communication</li>
          </ul>
        </section>
    );
  };
  
  export default About;