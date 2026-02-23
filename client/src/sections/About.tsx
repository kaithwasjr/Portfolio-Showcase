import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Code2, Database, Layout, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Layout,
    title: "Frontend Excellence",
    desc: "Crafting beautiful, responsive, and accessible interfaces using React.js and modern CSS frameworks."
  },
  {
    icon: Database,
    title: "Robust Backends",
    desc: "Building scalable APIs and services with ASP.NET Core, Node.js, and SQL Server."
  },
  {
    icon: Rocket,
    title: "Performance Focus",
    desc: "Optimizing applications for speed, ensuring smooth experiences even on complex platforms."
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    desc: "Writing maintainable, well-tested code following SOLID principles and best practices."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="A passionate developer bridging the gap between design and robust engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 prose dark:prose-invert prose-lg"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am an architect and lead Full Stack Developer with a proven track record of delivering enterprise-grade products. My expertise lies at the intersection of modern frontend frameworks like <strong className="text-foreground font-semibold">React.js</strong> and powerful backend technologies like <strong className="text-foreground font-semibold">ASP.NET Core</strong>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              Over the years, I've built everything from complex HR management systems to high-traffic accounts receivable platforms handling thousands of users. I thrive on solving complex architectural challenges, integrating real-time features via WebSockets, and establishing CI/CD pipelines.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              When I'm not coding, I'm passionate about mentoring teams, exploring new technologies, and refining development workflows to boost productivity.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
