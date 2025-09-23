import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ExternalLink, Mail } from "lucide-react";

export default function Portfolio() {
  const technologies = [
    "Javascript",
    "CSS",
    "HTML",
    "React",
    "NextJS",
    "TailwindCSS",
  ];

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Theme Toggle */}
      <header className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mx-auto lg:mx-0 mb-8 overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Profile Picture</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg">Hi, I&apos;m Oghenekefe</p>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              FRONT-END
              <br />
              WEB DEVELOPER
            </h1>
            <p className="text-lg max-w-lg mx-auto lg:mx-0">
              I&apos;m a frontend developer passionate about crafting fully
              reponsive and interactive websites
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3">
              <a href="#contact">Reach Out</a>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 lg:flex-none mt-8 lg:mt-0">
          <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto overflow-hidden">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Two picture hero</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hi, I&apos;m Oghenekefe—a passionate frontend developer who loves
              building intuitive and dynamic user experiences. I enjoy
              transforming ideas into functional, beautiful interfaces with
              clean and efficient code.
            </p>
            <p>
              I&apos;m always eager to learn new technologies, experiment with
              different frameworks, and refine my skills. Problem-solving is
              what excites me the most—whether it&apos;s debugging complex
              issues or optimizing performance, I love the challenge of finding
              elegant solutions.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              concepts, diving into documentation, or working on side projects
              to push my boundaries. If you&apos;re as excited about tech as I
              am, let&apos;s connect and build something awesome!
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 lg:px-12 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div>
                  <h3 className="text-xl font-semibold">Frontend Developer</h3>
                  <p className="text-primary font-medium">Freelance</p>
                </div>
                <span className="text-muted-foreground text-sm lg:text-base">
                  2023 - Present
                </span>
              </div>
              <p className="text-base leading-relaxed">
                Developing responsive and interactive websites for various
                clients. Specializing in React, Next.js, and modern CSS
                frameworks. Successfully delivered 10+ projects ranging from
                business websites to web applications.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    Web Developer Intern
                  </h3>
                  <p className="text-primary font-medium">Tech Startup</p>
                </div>
                <span className="text-muted-foreground text-sm lg:text-base">
                  2022 - 2023
                </span>
              </div>
              <p className="text-base leading-relaxed">
                Collaborated with a team of developers to build and maintain
                company websites. Gained experience in version control, agile
                development, and code reviews. Contributed to improving website
                performance by 30%.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Git
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Team Collaboration
                </span>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="border-l-4 border-primary pl-6 space-y-2">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                <div>
                  <h3 className="text-xl font-semibold">
                    Junior Web Developer
                  </h3>
                  <p className="text-primary font-medium">Digital Agency</p>
                </div>
                <span className="text-muted-foreground text-sm lg:text-base">
                  2021 - 2022
                </span>
              </div>
              <p className="text-base leading-relaxed">
                Started my professional journey building static websites and
                learning modern web development practices. Focused on creating
                pixel-perfect designs and responsive layouts for client
                projects.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  HTML
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  CSS
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Responsive Design
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Client Communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technologies</h2>
          <ul className="space-y-2 text-lg">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-3">-</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contact" className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Contact</h2>
          <p className="text-lg mb-8 leading-relaxed">
            &quot;I&apos;m just a message away! Whether it&apos;s about work,
            collaboration, or tech discussions. Let&apos;s build something
            cool!&quot;
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
            asChild
          >
            <a href="mailto:ok.okpare@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Reach Out
            </a>
          </Button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technologies</h2>
          <ul className="space-y-2 text-lg">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-3">-</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
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
                <div className="w-full h-64 lg:h-96 bg-gray-300 flex items-center justify-center rounded">
                  <span className="text-gray-600">
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
                    className="bg-black text-white hover:bg-gray-800"
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

      {/* Contact Section */}
      <section id="contact" className="px-6 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Contact</h2>
          <p className="text-lg mb-8 leading-relaxed">
            &quot;I&apos;m just a message away! Whether it&apos;s about work,
            collaboration, or tech discussions. Let&apos;s build something
            cool!&quot;
          </p>
          <Button
            className="bg-black text-white hover:bg-gray-800 px-8 py-3"
            asChild
          >
            <a href="mailto:ok.okpare@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Reach Out
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
