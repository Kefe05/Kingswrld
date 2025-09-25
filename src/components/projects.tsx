import React from 'react'
import { Button } from './ui/button'
import { ExternalLink } from 'lucide-react';

export default function Projects() {
 
   const projects = [
     {
       title: "Viva Decor",
       description:
         "This is a website to display interior designs for viva decor it comprises of the works, services, testimonials of the viva decor clients",
       tech: "For this project i used HTML, CSS and little Javascript for some interactivity",
       link: "https://interior-design-henna-ten.vercel.app/",
       image: "/interior-2.png",
     },
     {
       title: "Starstation Works",
       description:
         "This website comprises of the works done by Starstation along with other companies, Starstation is an ad agency that is involve in marketing, advertising of global brands from food to tech to clothing",
       tech: "For this project i used Next js, Tailwind Css, Framer Motion.",
       link: "https://starstation.vercel.app/works",
       image: "/star.png",
     },
     {
       title: "Car Site(Ongoing)",
       description:
         "This is website used to display some the services offered by a car companies such as hailing services",
       tech: "For this website I used React and Css adding some basic animation in css",
       link: "https://react-car-site.vercel.app",
       image: "/car-site.png",
     },
   ];

  return (
   <section className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-lg mb-12">
            This are some of the nice collection of work that I have done.
          </p>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                {/* Project Image */}
                <div className="w-full h-64 lg:h-96 bg-muted flex items-center justify-center rounded">
                  <span className="text-muted-foreground">
                    Project Image: {project.image}
                  </span>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <p className="text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-lg leading-relaxed">{project.tech}</p>

                  <Button
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Website
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
