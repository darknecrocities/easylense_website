"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export function AppPreviewSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const screens = [
     { title: "Navigation & Mapping", desc: "OSRM-powered pedestrian profiles with high-contrast active routes.", src: "/images/screens/Map View Screen (Default).png" },
     { title: "The Assistant HUD", desc: "Real-time bounding boxes with Slide-to-Hide Mic boundaries.", src: "/images/screens/Detection Main Screen (Real-Time Feed).png" },
     { title: "Hardware Diagnostics", desc: "Granular control over device polling, battery, and firmware states.", src: "/images/screens/Device Info Screen (Battery, Firmware, Signal).png" },
     { title: "Voice Integration", desc: "Customize haptic interactions and TTS voice profiles instantly.", src: "/images/screens/Voice Feedback Settings Screen.png" },
     { title: "User Control Hub", desc: "Fully accessible settings and emergency contact integrations.", src: "/images/screens/Settings Main Menu Screen.png" },
     { title: "Emergency Network", desc: "Rapid response SMS and location mapping for emergency contacts.", src: "/images/screens/Emergency Alert Sending Screen.png" },
     { title: "Alert History Logs", desc: "Review your complete detection timeline with intelligent system filters.", src: "/images/screens/Alert History Screen (All Filter Active).png" },
     { title: "Dynamic Risk UI", desc: "High-contrast warnings for imminent negative obstacles and hazards.", src: "/images/screens/Detection Screen (Risk Level_ Danger).png" },
     { title: "Targeted Detection", desc: "Specialized context-switching for indoor structures like stairs.", src: "/images/screens/Detection Screen (Stairs Detected).png" },
     { title: "IoT Handshake", desc: "Initiate low-energy Bluetooth pairing with the Smart Glasses.", src: "/images/screens/Device Connection Screen (Scanning).png" },
     { title: "Active TCP Link", desc: "Maintain a persistent, encrypted link directly to edge hardware.", src: "/images/screens/Device Connection Screen (Connected).png" },
     { title: "Guardian Network", desc: "Assign and organize critical contacts for immediate emergency routing.", src: "/images/screens/Emergency Contact Settings Screen (List View).png" },
     { title: "Trusted Profiles", desc: "Quickly bind trusted friends & family directly into your safety group.", src: "/images/screens/Emergency Contact Settings Screen (Add Contact).png" },
     { title: "Sensory Orchestration", desc: "Fine-tune the motor pulse intensity locally from the command hub.", src: "/images/screens/Haptic Settings Screen.png" },
     { title: "Mission Control", desc: "Active visual monitoring of IoT glass battery and connection flow.", src: "/images/screens/Home Screen connected.png" },
     { title: "Voice Customization", desc: "Test offline TTS profiles before locking them into the device NPU.", src: "/images/screens/Voice Feedback Test Screen (Modal).png" },
     { title: "Turn-By-Turn Audio", desc: "Step-by-step pedestrian updates powered by strict spatial logic.", src: "/images/screens/Navigation Turn-By-Turn Voice Screen.png" },
     { title: "Disconnected Routing", desc: "Full GPS navigation pipelines functioning deeply off-the-grid.", src: "/images/screens/Navigation Offline Mode Screen.png" },
     { title: "Path Intelligence", desc: "Review physical trajectory and intersection warnings before setting off.", src: "/images/screens/Navigation Route Planning Screen (Route Summary).png" },
     { title: "Accessibility Profiles", desc: "Tailor UI metrics strictly to your unique visual condition.", src: "/images/screens/Profile Edit Screen.png" },
     { title: "Vital Diagnostics", desc: "A comprehensive view of active profiles and system stability.", src: "/images/screens/User Profile Overview Screen.png" },
     { title: "Silent Assertions", desc: "Control precisely when the core system interrupts your spatial focus.", src: "/images/screens/Notification Settings Screen.png" },
     { title: "OTA Firmware Update", desc: "Seamless flashes to keep your glasses operating flawlessly.", src: "/images/screens/Firmware Update Screen (Prompt Modal).png" },
     { title: "Zero-Cloud Guarantee", desc: "Absolute transparency detailing exactly how edge AI protects you.", src: "/images/screens/Terms & Privacy Policy Screen.png" },
     { title: "Encrypted Entry", desc: "Secure cryptographic gateways ensuring personal profiles stay safe.", src: "/images/screens/Signup Screen (Basic Info).png" },
     { title: "Ecosystem Onboarding", desc: "Rapid registration to instantly unlock the Smart Vision network.", src: "/images/screens/Signup Screen (Success Confirmation).png" }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight pb-2">
             Assistant <span className="text-gradient">UI v4</span>
          </h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
             Experience the frictionless, accessible interface designed for absolute clarity. Swipe to explore the entire ecosystem.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Controls */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full glass hover:bg-white/10 hover:text-primary transition-all z-20 shadow-2xl"
            aria-label="Previous Screen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full glass hover:bg-white/10 hover:text-primary transition-all z-20 shadow-2xl"
            aria-label="Next Screen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Native Snap Container */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 pt-8 px-8 md:px-24 scrollbar-hide"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {screens.map((screen, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="flex-none snap-center flex flex-col items-center w-[300px] md:w-[320px]"
               >
                 <div className="relative w-full aspect-[9/19.5] glass rounded-[2.5rem] p-2 border-white/20 shadow-[0_0_50px_rgba(65,105,225,0.15)] group transition-transform duration-300 hover:-translate-y-2 mb-8">
                    <div className="w-full h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden relative">
                      <Image
                        src={screen.src}
                        alt={screen.title}
                        fill
                        className="object-contain pointer-events-none"
                        unoptimized
                      />
                      {/* Optional UI indicator layer */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                    </div>
                 </div>
                 
                 <div className="text-center px-2">
                   <h4 className="font-bold text-xl mb-2">{screen.title}</h4>
                   <p className="text-sm text-foreground/60 leading-relaxed">{screen.desc}</p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
