import Image from "next/image"
import { Button } from "./ui/button"

export default function HeroSection(){
    return  (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 mt-16 lg:mt-0">
            <div className="flex-1 space-y-4 text-center ">
              <div className="w-40 h-40   rounded-full mx-auto mb-4 overflow-hidden">
               <Image src={'/profile.jpg'} alt="Profile pic" width={40} height={40} className="w-full h-full object-cover object-fit" />
              </div>
    
              <div className="space-y-4">
                <p className="text-lg font-bold text-slate-300">Hi, I&apos;m Oghenekefe</p>
                <h1 className="text-4xl lg:text-7xl font-bold text-slate-500 ">
                  FRONT-END
                  <br />
                  WEB DEVELOPER
                </h1>
                <p className="text-lg text-slate-300 max-w-lg mx-auto ">
                  I&apos;m a frontend developer passionate about crafting fully
                  reponsive and interactive websites
                </p>
                <Button className="w-[200px] h-10 text-primary-foreground dark:bg-cyan-800 dark:text-slate-300 font-medium text-sm px-8 py-4 shadow-cyan-600/30 shadow-xl hover:shadow-cyan-600/50 hover:scale-90 transition-all cursor-pointer">
                  <a href="#contact">Reach Out</a>
                </Button>
              </div>
            </div>    
    </section>
    )
}