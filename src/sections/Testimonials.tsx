"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "David Chen",
      role: "Beta Tester, Visually Impaired Advocate",
      content: "EasyLens has completely changed how I navigate the city. The haptic feedback on the glasses is intuitive, and the offline AI ensures I'm never lost even in the subway.",
      avatar: "DC"
    },
    {
      name: "Dr. Sarah Miller",
      role: "Accessibility Researcher",
      content: "A masterclass in inclusive design. The combination of local LLMs and real-time vision is the future of assistive technology. Radical independence is no longer a dream.",
      avatar: "SM"
    },
    {
      name: "Marcus Thorne",
      role: "Tech Journalist",
      content: "The Crystal UX is visually stunning and functionally superior. It's rare to see a project balance high-performance AI with such a premium user experience.",
      avatar: "MT"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            💬 Real Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             Voice of our <span className="text-gradient">Users</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             Join thousands of individuals rediscovering the world with EasyLens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl relative group hover:border-primary/50 transition-colors"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-8 italic leading-relaxed">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white shadow-lg">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-xs text-foreground/50">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
