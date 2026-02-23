import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ProjectModal, type Project } from "@/components/ProjectModal";
import { ArrowUpRight } from "lucide-react";

const projectsData: Project[] = [
  {
    id: 1,
    title: "MyBridge HRMS",
    shortDesc: "Enterprise HR System for 5 Clients and 2000+ Active Users.",
    fullDesc: "A comprehensive Human Resource Management System tailored for enterprise clients. Features include a complex Recruitment Pipeline, Indian Payroll module integration, strict Role-Based Access Control (RBAC), and real-time notifications utilizing WebSockets to keep management and employees synced instantly.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React.js", "ASP.NET Core", "SQL Server", "WebSockets"],
    liveUrl: "#",
  },
  {
    id: 2,
    title: "JK Tornel AR System",
    shortDesc: "International Accounts Receivable Platform for 5000+ Customers.",
    fullDesc: "Designed and developed an international AR platform that streamlined financial operations. It features a Multi-step Payment Flow, a dedicated Support Chat & Dispute Resolution Bot, bulk customer onboarding capabilities via CSV/Excel parsing, and full i18n localization for a global user base.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["React.js", "ASP.NET Core", "REST APIs", "WebSockets"],
  },
  {
    id: 3,
    title: "Mobilify No-Code",
    shortDesc: "No-Code Mobile App Builder using metadata-driven UI engine.",
    fullDesc: "An innovative platform enabling non-technical users to build and publish complex mobile apps without writing code. Engineered a metadata-driven UI rendering engine on the frontend and a highly scalable backend architecture in Node.js/MongoDB capable of handling highly variable custom app data structures seamlessly.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    tags: ["React.js", "Redux", "Node.js", "MongoDB"],
    githubUrl: "#",
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Featured Work" 
          subtitle="A selection of enterprise projects I've built and led."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-card rounded-3xl overflow-hidden border border-border shadow-lg shadow-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                  {project.shortDesc}
                </p>

                <Button 
                  onClick={() => setSelectedProject(project)}
                  variant="ghost" 
                  className="w-full justify-between mt-auto border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5"
                >
                  View Details
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
