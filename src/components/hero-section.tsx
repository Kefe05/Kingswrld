import { Button } from "./ui/button"

export default function HeroSection(){
    return  (
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
    )
}