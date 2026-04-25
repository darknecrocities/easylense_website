"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";
import { Users, Timer, Sparkles, CheckCircle2, Loader2, Calendar } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export function BetaReservationSection() {
  const [currentSlots, setCurrentSlots] = useState(0); 
  const [isLoading, setIsLoading] = useState(false);
  const totalSlots = 100;
  const progress = (currentSlots / totalSlots) * 100;
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeTb-hlkvnknH2qcWWV3K8EiZHMy6X-PhswGnnL_DfwZoqT2A/viewform?usp=header";

  // Countdown Logic
  const targetDate = new Date("2026-06-10T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    const fetchCount = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/beta-count");
        const data = await response.json();
        if (data.count !== undefined) {
          setCurrentSlots(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch beta count:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCount();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[160px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <GlassCard className="p-8 md:p-16 border-primary/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles className="w-24 h-24 text-primary" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-none">
                  Join the First <span className="text-gradient">100 App Testers</span>
                </h2>
                
                <p className="text-xl text-foreground/70 mb-10 leading-relaxed max-w-xl">
                  We&apos;ve expanded our capacity to <strong className="font-bold text-foreground">100 exclusive slots</strong>. Secure yours now to be the first to experience the live EasyLens application on your own device.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {[
                    { title: "Live App Access", desc: "Be among the first 100 to test the production-ready application." },
                    { title: "Priority AI Engine", desc: "First access to next-gen inference models." },
                    { title: "Personal Onboarding", desc: "1-on-1 session with our engineering team." },
                    { title: "Exclusive Community", desc: "Private access to the Alpha Discord channel." },
                    { title: "Direct Feedback", desc: "Your requests prioritized in the roadmap." },
                    { title: "Experimental Tools", desc: "Early access to unreleased spatial reasoning features." }
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="space-y-1"
                    >
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <CheckCircle2 className="w-4 h-4" />
                        {benefit.title}
                      </div>
                      <p className="text-sm text-foreground/50">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                   <div className="flex items-center gap-3 mb-4 text-accent font-bold uppercase tracking-wider text-sm">
                      <Calendar className="w-5 h-5" />
                      Registration Closes June 10
                   </div>
                   <div className="grid grid-cols-4 gap-4">
                      {[
                        { label: "Days", value: timeLeft.days },
                        { label: "Hours", value: timeLeft.hours },
                        { label: "Mins", value: timeLeft.minutes },
                        { label: "Secs", value: timeLeft.seconds }
                      ].map((item, i) => (
                        <div key={i} className="text-center">
                           <div className="text-2xl md:text-3xl font-black text-foreground">{String(item.value).padStart(2, '0')}</div>
                           <div className="text-[10px] uppercase text-foreground/40 font-bold tracking-tighter">{item.label}</div>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 dark:bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative lg:sticky lg:top-24"
              >
                <div className="text-center mb-10">
                  <div className="text-sm text-foreground/50 uppercase tracking-widest mb-4 font-bold flex items-center justify-center gap-2">
                    Enrolled Beta Testers
                    {isLoading && <Loader2 className="w-4 h-4 animate-spin text-primary" />}
                  </div>
                  <div className="text-7xl font-black text-primary mb-2 drop-shadow-[0_0_15px_rgba(65,105,225,0.3)]">
                    {currentSlots}<span className="text-foreground/10 text-4xl font-bold"> / {totalSlots}</span>
                  </div>
                  <div className="text-foreground/70 font-medium">Limited Phase 1 enrollment ends in June.</div>
                </div>

                {/* Progress Bar */}
                <div className="h-6 w-full bg-white/10 rounded-full mb-12 overflow-hidden relative border border-white/5 p-1">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient shadow-[0_0_25px_rgba(65,105,225,0.6)]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
                    <Users className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-xs text-foreground/40 uppercase font-bold tracking-widest">Active Interest</div>
                    <div className="text-xl font-black">1,248+</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-colors">
                    <Timer className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                    <div className="text-xs text-foreground/40 uppercase font-bold tracking-widest">Wait Time</div>
                    <div className="text-xl font-black">~24h</div>
                  </div>
                </div>

                <div className={currentSlots >= totalSlots ? "pointer-events-none opacity-80" : ""}>
                  <a 
                    href={currentSlots >= totalSlots ? "#" : googleFormLink} 
                    target={currentSlots >= totalSlots ? "_self" : "_blank"} 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      disabled={currentSlots >= totalSlots}
                      className={`w-full text-xl h-16 font-black group shadow-[0_0_40px_rgba(65,105,225,0.5)] ${currentSlots < totalSlots ? "hover:scale-[1.02] active:scale-[0.98]" : "grayscale"}`}
                    >
                      {currentSlots >= totalSlots ? "Registration Full" : "Reserve My Slot"}
                      {currentSlots < totalSlots && (
                        <motion.span 
                          animate={{ x: [0, 5, 0] }} 
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="ml-3"
                        >
                          →
                        </motion.span>
                      )}
                    </Button>
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-sm text-foreground/40 italic">
                    "Only 100 visionaries will participate in our first major stress-test phase. Don't miss out on Founder status."
                  </p>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
