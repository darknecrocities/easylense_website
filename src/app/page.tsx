import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { FeaturesSection } from "@/sections/Features";
import { AppPreviewSection } from "@/sections/AppPreview";
import { ScenariosSection } from "@/sections/Scenarios";
import { HowItWorksSection } from "@/sections/HowItWorks";
import { TechStackSection } from "@/sections/TechStack";
import { SecurityAndHardwareSection } from "@/sections/SecurityAndHardware";
import { RoadmapSection } from "@/sections/Roadmap";
import { TeamSection } from "@/sections/Team";
import { GroupInfoSection } from "@/sections/GroupInfo";
import { CTASection } from "@/sections/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <AppPreviewSection />
      <ScenariosSection />
      <HowItWorksSection />
      <SecurityAndHardwareSection />
      <TechStackSection />
      <RoadmapSection />
      <TeamSection />
      <GroupInfoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
