import React from 'react'

export default function Experience() {
  return (
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
  )
}
