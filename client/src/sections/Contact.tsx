import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSubmitContact } from "@/hooks/use-contact";
import { Send, Loader2 } from "lucide-react";

// Assuming we have access to shared schema, but creating a local copy for frontend validation to ensure standalone works
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        reset();
      },
      onError: (error) => {
        toast({
          title: "Failed to send message",
          description: error.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-primary/5 clip-path-slant z-0 pointer-events-none" style={{ clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or looking for a lead developer? Let's talk."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card glass-panel rounded-3xl p-8 sm:p-12 border border-border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground ml-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...register("name")}
                    className={errors.name ? "border-destructive focus-visible:ring-destructive/10" : ""}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs ml-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground ml-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    {...register("email")}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive/10" : ""}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs ml-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground ml-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..." 
                  {...register("message")}
                  className={`min-h-[160px] ${errors.message ? "border-destructive focus-visible:ring-destructive/10" : ""}`}
                />
                {errors.message && (
                  <p className="text-destructive text-xs ml-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-xl mt-4"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
