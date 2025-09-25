import React from 'react'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
       <header className="fixed top-4 right-4 z-50 p-5">
        <ul className='flex gap-4 items-center text-slate-500'>
          <li>About Me</li>
          <li>Works</li>
          <li>Contact</li>
           <ThemeToggle />
        </ul>
         
      </header>
  )
}
