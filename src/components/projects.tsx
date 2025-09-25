import React from 'react'
import ProjectCard from './project-card';
import getStarted from '../../videos/get-started.mp4.json';
import advertisement from '../../videos/advertisement.mp4.json';
import analytics from '../../videos/analytics.mp4.json';
import car from '../../videos/car-video.mp4.json';
import peenly from '../../videos/peenly.mp4.json';

export default function Projects() {

  const projects = [
    {
      title: "Trackmax",
      description:
        "This is a website to display interior designs for viva decor it comprises of the works, services, testimonials of the viva decor clients",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://interior-design-henna-ten.vercel.app/",
      video: analytics,
    },
    {
      title: "Starstation Works",
      description:
        "This website comprises of the works done by Starstation along with other companies, Starstation is an ad agency that is involve in marketing, advertising of global brands from food to tech to clothing",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://starstation.vercel.app/works",
      video: advertisement,
    },
    {
      title: "Car Site",
      description:
        "This is website used to display some the services offered by a car companies such as hailing services",
      technologies: ["React", "CSS", "Animations"],
      liveUrl: "https://react-car-site.vercel.app",
      video: car,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode support",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      video: peenly,
    },
  ];

  return (
    <section id="works" className="px-6 lg:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              video={project.video}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
