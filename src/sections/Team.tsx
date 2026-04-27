"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { GitBranch as Github, Briefcase as Linkedin, Code, ShieldCheck, Cpu, Layout } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/Modal";

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const team = [
    {
      name: "Graciella Mhervie D. Jimenez",
      role: "Project Manager & UI/UX Designer",
      image: "/images/profiles/graciella.jpg",
      icon: <Layout className="w-5 h-5" />,
      contributions: [
        "Architected the premium design system and glassmorphism UI language.",
        "Developed the high-performance React frontend and motion orchestration.",
        "Ensured consistent visual excellence and responsive layouts across all devices.",
        "Designed the core user flow for the AI Camera simulation."
      ]
    },
    {
      name: "Jian Kalel D. Marquez",
      role: "Hardware Engineer",
      image: "/images/profiles/kalel.jpeg",
      icon: <Cpu className="w-5 h-5" />,
      contributions: [
        "Engineered the IoT hardware integration and physical wearable prototype.",
        "Developed custom firmware logic for real-time sensor-to-app communication.",
        "Handled technical specifications for the ESP32-based hardware modules.",
        "Optimized power consumption for long-term wearable use."
      ]
    },
    {
      name: "Arron Kian M. Parejas",
      role: "AI/ML Engineer and Fullstack Lead",
      image: "/images/profiles/arron.jpg",
      icon: <Code className="w-5 h-5" />,
      contributions: [
        "Spearheaded the AI/ML architecture using MobileNetV2-SSD for efficient object detection.",
        "Developed the fullstack infrastructure and the Intelligence Matrix reasoning core.",
        "Integrated the OSRM-based navigation API for accessible spatial routing.",
        "Managed the overall technical roadmap and system-wide integration."
      ]
    },
    {
      name: "Jenica Sarah B. Tongol",
      role: "UI/UX Lead and QA Engineer",
      image: "/images/profiles/jenica.png",
      icon: <ShieldCheck className="w-5 h-5" />,
      contributions: [
        "Led the comprehensive UI/UX research phase with focus on accessibility standards.",
        "Implemented rigorous QA testing protocols for both software and hardware interaction.",
        "Conducted accessibility audits to ensure compliance with screen readers and assistive tech.",
        "Refined UI polish and micro-interactions for a more intuitive user experience."
      ]
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
              className="cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <GlassCard gradientHover className="h-full flex flex-col items-center text-center p-8 group transition-all duration-500 hover:-translate-y-2">
                 {/* Avatar */}
                 <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 border-2 border-white/20 p-1 mb-6 group-hover:border-primary/50 transition-colors">
                    <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative shadow-inner">
                       <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
                 
                 <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                 <p className="text-primary text-sm font-medium mb-6 opacity-80">{member.role}</p>
                 
                 <div className="mt-auto flex justify-center gap-3 w-full">
                    <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                       <Github className="w-4 h-4" />
                    </div>
                    <div className="p-2.5 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                       <Linkedin className="w-4 h-4" />
                    </div>
                 </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contribution Modal */}
      <Modal 
        isOpen={!!selectedMember} 
        onClose={() => setSelectedMember(null)}
        title={selectedMember?.name || ""}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              {selectedMember?.icon}
            </div>
            <div>
              <p className="text-sm text-foreground/50 font-medium uppercase tracking-wider">Primary Focus</p>
              <p className="text-lg font-bold text-primary">{selectedMember?.role}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span>
              Key Contributions
            </h4>
            <ul className="space-y-4">
              {selectedMember?.contributions.map((contribution: string, idx: number) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-3 text-foreground/80 leading-relaxed"
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></span>
                  {contribution}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </section>
  );
}
