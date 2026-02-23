import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-bold font-display tracking-tight flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
                A
              </div>
              <span>Amit.</span>
            </a>
            <p className="text-muted-foreground text-sm text-center md:text-left max-w-xs">
              Building scalable, high-performance web applications with modern technologies.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full bg-accent/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {currentYear} Amit Kaithwas.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
