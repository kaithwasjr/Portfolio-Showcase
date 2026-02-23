import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 85 },
      { name: "Next.js", level: 80 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "ASP.NET Core", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "WebSockets", level: 80 },
    ]
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "SQL Server", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "GitHub Actions", level: 80 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-lg shadow-black/5 dark:shadow-none"
            >
              <h3 className="text-2xl font-bold font-display mb-8 text-foreground flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-primary inline-block"></span>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
