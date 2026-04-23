"use client";
import { motion } from "framer-motion";

export function LogoCloud() {
  const logos = [
    { name: "Flutter", color: "text-blue-400" },
    { name: "Firebase", color: "text-yellow-500" },
    { name: "TinyLlama", color: "text-purple-400" },
    { name: "Google ML Kit", color: "text-blue-500" },
    { name: "Cloudflare R2", color: "text-orange-500" },
    { name: "OSRM", color: "text-emerald-400" }
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-foreground/30 mb-8">
          Built with Industry Leading Tech
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {logos.map((logo, idx) => (
             <motion.span
               key={logo.name}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className={`text-xl md:text-2xl font-black tracking-tighter ${logo.color} cursor-default`}
             >
               {logo.name}
             </motion.span>
           ))}
        </div>
      </div>
    </div>
  );
}
