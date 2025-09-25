import React from 'react'

export default function Skills() {
      const technologies = [
    "Javascript",
    "CSS",
    "HTML",
    "React",
    "NextJS",
    "TailwindCSS",
  ];
  return (
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
  )
}
