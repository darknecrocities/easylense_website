"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GitBranch as Github, Briefcase as Linkedin } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  const team = [
    {
      name: "Graciella Mhervie D. Jimenez",
      role: "Lead Developer & UI/UX Design",
      image: "/images/profiles/graciella.jpg"
    },
    {
      name: "Jian Kalel D. Marquez",
      role: "Hardware Engineer",
      image: "/images/profiles/kalel.jpeg"
    },
    {
      name: "Arron Kian M. Parejas",
      role: "AI/ML Engineer and Fullstack Lead",
      image: "/images/profiles/arron.jpg"
    },
    {
      name: "Jenica Sarah B. Tongol",
      role: "UI/UX Lead and QA Engineer",
      image: "/images/profiles/jenica.png"
    }
  ];

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] -z-10 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            👨‍💻 Meet the Developers
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             The Team Behind <span className="text-gradient">EasyLens</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             A dedicated group of engineers and designers committed to building AI for social good.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard gradientHover className="h-full flex flex-col items-center text-center p-8 group">
                 {/* Avatar */}
                 <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 border-2 border-white/20 p-1 mb-6 group-hover:border-primary/50 transition-colors">
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
                       <Image src={member.image} alt={member.name} fill className="object-cover" unoptimized />
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
                 
                 <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                 <p className="text-primary text-sm font-medium mb-6">{member.role}</p>
                 
                 <div className="mt-auto flex justify-center gap-3 w-full">
                    <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                       <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors">
                       <Linkedin className="w-4 h-4" />
                    </a>
                 </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
