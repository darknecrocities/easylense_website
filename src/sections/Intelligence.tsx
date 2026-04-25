"use client";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Brain, Cpu, Focus, Sparkles, ScanEye } from "lucide-react";

export function IntelligenceSection() {
  const models = [
    {
      title: "MobileNetV2-SSD",
      subtitle: "Temporal Bounding & Tracking",
      icon: <Focus className="w-8 h-8 text-primary" />,
      desc: "Our highly optimized local edge model. Built specifically to run on mobile neural processing units (NPUs), MobileNet tracks moving obstacles and physical hazards at strict sub-30ms latencies, powering our dynamic Haptic Pulse engine.",
      color: "from-primary/20 hover:border-primary/50"
    },
    {
      title: "Google ML Kit",
      subtitle: "Semantic Image Labeling",
      icon: <ScanEye className="w-8 h-8 text-yellow-400" />,
      desc: "An aggressive 60 FPS vision pipeline for instantaneous scene parsing. This provides the crucial backbone for determining the broader environmental context—like identifying crosswalks, vehicles, and general sidewalk topography.",
      color: "from-yellow-500/20 hover:border-yellow-500/50"
    },
    {
      title: "TinyML Ecosystem",
      subtitle: "Offline Cognitive Reasoning",
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      desc: "True autonomy requires absolute independence from the cloud. Our integrated TinyML structures (featuring compressed LLM paradigms) parse localized data directly on the device, generating spatial reasoning responses deep underground or totally off-the-grid.",
      color: "from-emerald-500/20 hover:border-emerald-500/50"
    },
    {
      title: "Gemini 3.1 Multimodal",
      subtitle: "Deep Cloud OCR & Fallback",
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      desc: "When maximum resolution is required, EasyLens triggers a highly encrypted cloud snapshot to Gemini 3.1. This unlocks extreme multimodal comprehension, from precisely reading a medication bottle's tiny text to translating complex subway maps in real-time.",
      color: "from-purple-500/20 hover:border-purple-500/50"
    }
  ];

  return (
    <section id="intelligence" className="py-32 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-primary/5 rounded-[100%] blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary gap-2">
            <Brain className="w-4 h-4" /> The Neural Core
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            A Quad-Core <span className="text-gradient">Intelligence Matrix.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            EasyLens doesn't rely on a single algorithm. We orchestrate a master pipeline of 4 incredibly specialized AI models—balancing zero-latency edge computation for immediate safety with devastatingly powerful cloud intelligence for deep environmental auditing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <GlassCard className={`h-full flex flex-col p-8 group transition-colors duration-500 bg-gradient-to-br from-white/5 to-transparent border border-white/10 ${model.color}`}>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl glass flex justify-center items-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-md" />
                    {model.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{model.title}</h3>
                    <p className="text-primary text-sm font-semibold tracking-wide uppercase mt-1">{model.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-foreground/75 leading-relaxed mt-auto">
                  {model.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
