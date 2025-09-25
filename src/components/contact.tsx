import React from 'react'
import { Mail } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  return (
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
  )
}
