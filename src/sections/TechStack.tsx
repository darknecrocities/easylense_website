"use client";
import { motion } from "framer-motion";

export function TechStackSection() {
  const stack = [
    { cat: "Foundation", tech: "Flutter v3.22.x", desc: "Core UI & App Engine" },
    { cat: "Offline LLM", tech: "TinyLlama 1.1B", desc: "Local Intelligence" },
    { cat: "Cloud LLM", tech: "Gemini 3.1 Flash", desc: "Expert Scene Auditing" },
    { cat: "Scene Vision", tech: "MobileNetV2 SSD", desc: "Real-time Detection" },
    { cat: "Cloud Assets", tech: "Cloudflare R2", desc: "Profile & Image hosting" },
    { cat: "Logic Storage", tech: "Firebase Firestore", desc: "User Metadata" },
    { cat: "Navigation", tech: "OSRM", desc: "Pedestrian Path calculation" },
    { cat: "Geocoding", tech: "Photon", desc: "Elasticsearch destination search" },
    { cat: "BLE", tech: "flutter_blue_plus", desc: "IoT Communication" },
    { cat: "State", tech: "Provider", desc: "Global data flow" },
  ];

  return (
    <section className="py-24 bg-white/5 border-y border-white/10 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-10" />
       
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
             A full breakdown of our robust, lightweight ecosystem ensuring extreme performance and rapid inference.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
           {stack.map((item, idx) => (
              <motion.div
                 key={item.cat}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.3, delay: idx * 0.05 }}
                 className="glass p-5 rounded-2xl hover:border-primary/50 transition-colors"
              >
                 <div className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">{item.cat}</div>
                 <div className="font-bold text-lg text-foreground mb-2">{item.tech}</div>
                 <div className="text-xs text-foreground/60">{item.desc}</div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
