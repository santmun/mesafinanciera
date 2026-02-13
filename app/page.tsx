import { HeroSection } from "@/components/hero-section"
import { ProblemSection, SolutionSection, FeaturesSection, WhoIsItSection, AboutSection, FinalCTA } from "@/components/landing-sections"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060F] selection:bg-[#4d65ff] selection:text-white pb-0">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <WhoIsItSection />
      <AboutSection />
      <FinalCTA />
    </main>
  );
}
