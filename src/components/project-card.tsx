import { Card } from "./ui/card"
import { ExternalLink, GitBranch } from "lucide-react"
import Video from "next-video"

interface ProjectCardProps {
    title: string
    description: string
    video: string | any
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    className?: string
}

export default function ProjectCard({
    title,
    description,
    video,
    technologies,
    githubUrl,
    liveUrl,
    className = "",
    ...props
}: ProjectCardProps) {
    return (
        <Card
            className={`group relative overflow-hidden h-80 border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 ${className}`}
            {...props}
        >
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/60 group-hover:to-black/30 transition-all duration-300 z-10" />

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {githubUrl && (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                        <GitBranch className="w-4 h-4 text-white" />
                    </a>
                )}
                {liveUrl && (
                    <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    >
                        <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                )}
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                    {title}
                </h3>

                <p className="text-gray-200 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    )
}