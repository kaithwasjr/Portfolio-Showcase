import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse-slow" />
      <div
        className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-multiply opacity-50 dark:opacity-20 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col items-start text-left"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/30 text-primary font-medium text-sm mb-6 border border-primary/20">
              Available for new opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 text-balance">
              Hi, I'm{" "}
              <span className="text-primary relative inline-block">
                Amit
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary opacity-50"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>
              <br />
              <span className="text-foreground/80 text-4xl sm:text-5xl lg:text-6xl mt-2 block">
                Full Stack Developer.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Architecting and delivering enterprise-grade products with
              React.js & ASP.NET Core. Passionate about scalable solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button size="lg" asChild className="rounded-full">
                <a href="#projects" className="flex">
                  My Work <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground">
              <span className="text-sm font-medium uppercase tracking-wider">
                Follow Me
              </span>
              <div className="h-px w-12 bg-border"></div>
              <a
                href="https://github.com"
                className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
              {/* Decorative shapes behind image */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary to-accent rotate-6 opacity-80 blur-sm dark:opacity-40" />
              <div className="absolute inset-0 rounded-[2rem] bg-background border-2 border-border/50 -rotate-3 transition-transform duration-500 hover:rotate-0" />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border bg-muted shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQGwcrToXEYhBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1720033045947?e=1773273600&v=beta&t=MsAxZAsMmMm7O5bphWvamGFiBZJ_bOwkKta5z9BFM2k"
                  alt="Amit Kaithwas"
                  className="w-full h-full object-cover filter contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 sm:-left-12 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-sm font-bold font-display">
                    Lead Developer
                  </p>
                  <p className="text-xs text-muted-foreground">5+ Years Exp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
