import { HeroSection } from "@/sections/Hero";
import { VideoShowcaseSection } from "@/sections/VideoShowcase";
import { AboutSection } from "@/sections/About";
import { FeaturesSection } from "@/sections/Features";
import { AppPreviewSection } from "@/sections/AppPreview";
import { ScenariosSection } from "@/sections/Scenarios";
import { HowItWorksSection } from "@/sections/HowItWorks";
import { IntelligenceSection } from "@/sections/Intelligence";
import { TechStackSection } from "@/sections/TechStack";
import { SecurityAndHardwareSection } from "@/sections/SecurityAndHardware";
import { RoadmapSection } from "@/sections/Roadmap";
import { TestimonialsSection } from "@/sections/Testimonials";
import { FAQSection } from "@/sections/FAQ";
import { TeamSection } from "@/sections/Team";
import { GroupInfoSection } from "@/sections/GroupInfo";
import { CTASection } from "@/sections/CTA";
import { BetaReservationSection } from "@/sections/BetaReservation";
import { LogoCloud } from "@/components/LogoCloud";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <VideoShowcaseSection />
      <LogoCloud />
      <AboutSection />
      <FeaturesSection />
      <AppPreviewSection />
      <ScenariosSection />
      <HowItWorksSection />
      <IntelligenceSection />
      <SecurityAndHardwareSection />
      <TechStackSection />
      <TestimonialsSection />
      <RoadmapSection />
      <FAQSection />
      <TeamSection />
      <GroupInfoSection />
      <BetaReservationSection />
      <CTASection />
      <Footer />
    </div>
  );
}
