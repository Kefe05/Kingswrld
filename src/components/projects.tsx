import React from 'react'
import ProjectCard from './project-card';

export default function Projects() {

  const projects = [
    {
      title: "Viva Decor",
      description:
        "This is a website to display interior designs for viva decor it comprises of the works, services, testimonials of the viva decor clients",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://interior-design-henna-ten.vercel.app/",
      image: "/profile.jpg",
    },
    {
      title: "Starstation Works",
      description:
        "This website comprises of the works done by Starstation along with other companies, Starstation is an ad agency that is involve in marketing, advertising of global brands from food to tech to clothing",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://starstation.vercel.app/works",
      image: "/profile.jpg",
    },
    {
      title: "Car Site",
      description:
        "This is website used to display some the services offered by a car companies such as hailing services",
      technologies: ["React", "CSS", "Animations"],
      liveUrl: "https://react-car-site.vercel.app",
      image: "/profile.jpg",
    },
  ];

  return (
    <section id="works" className="px-6 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Works</h2>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
