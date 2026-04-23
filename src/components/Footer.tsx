"use client";
import { useState } from "react";
import { GitBranch as Github, Mail, MessageSquare as Twitter, Briefcase as Linkedin } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/Modal";

export function Footer() {
  const [activeModal, setActiveModal] = useState<"privacy" | "philosophy" | null>(null);

  return (
    <>
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/icons/main-logo.png" alt="EasyLens" width={28} height={28} className="object-contain opacity-80" />
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Easy<span className="text-primary">Lens</span>
                </span>
              </div>
              <p className="text-sm text-foreground/60 max-w-sm mb-6">
                Redefining vision through AI & IoT. Empowering individuals globally with next-generation spatial computing.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com/darknecrocities/EasyLense" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 glass rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 glass rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">System</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="#architecture" className="hover:text-primary cursor-pointer transition-colors">The Falcon Pipeline</a></li>
                <li><a href="#hardware" className="hover:text-primary cursor-pointer transition-colors">IoT Glasses Connection</a></li>
                <li><button onClick={() => setActiveModal("philosophy")} className="hover:text-primary transition-colors text-left">Detailed Core Philosophy</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Mission & Legal</h4>
              <ul className="space-y-3 text-sm text-foreground/60">
                <li><a href="#team" className="hover:text-primary transition-colors">Our Developers</a></li>
                <li><button onClick={() => setActiveModal("privacy")} className="hover:text-primary transition-colors text-left">Privacy & Zero-Cloud Policy</button></li>
                <li>
                  <a href="mailto:easylens.org@gmail.com" className="hover:text-primary transition-colors inline-flex items-center gap-2 mt-2">
                    <Mail className="w-4 h-4"/> easylens.org@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/40">
            <p>© {new Date().getFullYear()} EasyLens AI Team. All rights reserved.</p>
            <p>WCAG 2.1 AAA Compliant UX</p>
          </div>
        </div>
      </footer>

      {/* Render Popups based on state */}
      <Modal 
        isOpen={activeModal === "privacy"} 
        onClose={() => setActiveModal(null)} 
        title="Privacy & Zero-Cloud Policy"
      >
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <h3 className="text-xl font-bold text-primary border-b border-white/10 pb-2">Uncompromised Security</h3>
          <p>
            The EasyLens architecture operates on a strict zero-cloud liability doctrine. Voice interactions processed by our isolated TinyLlama LLM brain are strictly ephemeral. Audio processing runs locally within your mobile hardware bounds and ceases to exist immediately post-inference.
          </p>
          <h3 className="text-xl font-bold text-primary mt-6 border-b border-white/10 pb-2">Hardware-Level Encryption</h3>
          <p>
            All spatial telemetry routed from the customized ESP32-S3 IoT Smart Glasses to your primary computational node (your phone) traverses a localized WPA2/WPA3 heavily encrypted tunnel. No raw frame data from the OV2640 camera unit is ever dispatched over WWAN to external internet hosts absent extreme, user-authorized opt-in parameters like emergency Gemini Cloud assistance.
          </p>
          <p className="mt-4 text-xs text-foreground/50 border border-white/10 rounded-lg p-3 bg-white/5">
            Full compliance established natively under GDPR regulatory directives.
          </p>
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === "philosophy"} 
        onClose={() => setActiveModal(null)} 
        title="Our Radical Operational Philosophy"
      >
        <div className="space-y-4 text-foreground/80 leading-relaxed">
          <h3 className="text-xl font-bold text-primary">The Origin of EasyLens</h3>
          <p>
            Technology frequently attempts to simulate independence, forcing reliance upon continuous cellular connection backbones and bloated proprietary cloud engines. EasyLens shatters that dependency.
          </p>
          <h3 className="text-xl font-bold text-primary mt-6">Radical Autonomy</h3>
          <p>
            True navigational accessibility means retaining functionality inside dead-zone subway tunnels, sprawling concrete underground complexes, or distant rural pathways. By running high-velocity MobileNetV2-SSD tracking buffers natively against the NPU, you remain unconditionally protected. We build tools representing definitive control—no buffering, no wait times, and zero compromises in predictive safety.
          </p>
        </div>
      </Modal>
    </>
  );
}
