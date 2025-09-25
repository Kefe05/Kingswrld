import React from 'react'
import { ThemeToggle } from './theme-toggle'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

const Links = [
  {link: "#about",
    name: "About Me"
  },
  {link: "#works",
    name: "Works"
  },
  {link: "#contact",
    name: "Contact"
  },
]

export default function Header() {
  return (
       <header className="fixed top-0 right-0 left-0 flex justify-end  z-50 p-5 0 w-full ">
        <ul className='hidden w-fit ml-auto  md:flex gap-4 items-center text-slate-500 '>
         {Links.map((link, index) => (
          <li key={`${index + link.name}`} className='text-sm   hover:shadow-cyan-800 hover:shadow-md p-2 rounded-md '><Link href={link.link}>
            {link.name}
            </Link></li>
         ))}
          <span>|</span>
           <ThemeToggle />
        </ul>
         <MenuIcon className='block md:hidden text-3xl '    />


         
      </header>
  )
}
