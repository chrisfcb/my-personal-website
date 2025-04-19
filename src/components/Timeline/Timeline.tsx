import Image from 'next/image';

const Timeline = () => {
    const timelineEvents = [
        {
            date: "February 2024 – June 2024",
            title: "Korea University, Exchange UiO",
            description: "Completed an exchange semester in Seoul. Studied various subjects in Computer Science with good results.",
            image: "/korea_university.jpg" 
        },
        {
            date: "August 2022 – Present",
            title: "University of Oslo",
            description: "Bachelor’s degree in Informatics: Programming and System Architecture. Expected graduation in June 2025.",
            image: "/university_oslo.jpg" 
        },
        {
            date: "August 2021 – December 2021",
            title: "NLA Høgskolen/Kulturakademiet Oslo International School of Philosophy",
            description: "Studied Exphil, Exfac, and the history of ideas in Rome.",
            image: "/nla_hogskolen.jpg" 
        }
    ];
    

  return (
          <section id="timeline" className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 group">
                <div className="w-full md:w-1/2 transform transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <div className="text-orange-500 font-semibold">{event.date}</div>
                  <h3 className="text-2xl font-bold text-white-800">{event.title}</h3>
                  <p className="text-white-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  );
};

export default Timeline;
