import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export type Project = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden">
        <div className="relative h-64 w-full bg-muted">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        
        <div className="p-6 sm:p-8 pt-0 relative -mt-12">
          <div className="bg-background rounded-2xl p-6 shadow-xl border border-border mb-6 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-accent/20 text-primary rounded-full text-xs font-semibold tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <DialogHeader className="mb-4 text-left">
            <DialogTitle className="text-3xl">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDesc}
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-border">
            {project.liveUrl && (
              <Button asChild className="rounded-xl">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" className="rounded-xl">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
