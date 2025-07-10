import { ArrowRight, ExternalLink, Github } from "lucide-react";
import LMSPAGE from "../assets/LMSFrontPage.png"
import NetflixPage from "../assets/NetflixPage.png"
import MargDarshan from "../assets/MargDarshan.png"
const projects = [
  {
    id: 1,
    title: "Learnova",
    description: "A full-stack LMS (Learning Management System) web application built with the MERN stack.",
    image: LMSPAGE,
    tags: ["React.js", "TailwindCSS", "Clerk"," Stripe","Quill.js","Node.js + Express.js"],
    demoUrl: "https://lms-frontend-hazel-seven.vercel.app/",
    githubUrl: "https://github.com/Riyam111/LMS.git",
  },
  {
    id: 2,
    title: " Netflix Clone",
    description:
      " Created a responsive front-end replica of Netflix using React.js and styled components.",
    image: NetflixPage,
    tags: ["React.js", "TailwindCSS", "TMDB API"," Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Riyam111/Netflix-Clone.git",
  },
   {
    id: 3,
    title: "Marg Darshan Hub",
    description:
      "A full-stack web platform designed to support students during placements through interactive Q&A forums and experience-sharing features.",
    image: MargDarshan,
    tags: ["React.js", "TailwindCSS","Node.js"," Express.js","MongoDB"],
    demoUrl: "https://team-hacktopus.vercel.app/",
    githubUrl: "https://github.com/Sachin-K13Y/Team_Hacktopus.git",
  },
 
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Riyam111"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};