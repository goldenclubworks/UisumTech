import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection, Footer } from "@/components/sections/CTASection";
import { RefractionOverlay } from "@/components/RefractionOverlay";

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark selection:bg-uisum-orange/30">
      {/* Global Interactive Elements */}
      <RefractionOverlay />

      {/* Navigation */}
      <FloatingNav />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero */}
        <HeroSection />

        {/* Services */}
        <ServicesSection />

        {/* Experience / Why UISUM */}
        <ExperienceSection />

        {/* Work / Portfolio */}
        <WorkSection />

        {/* Process */}
        <ProcessSection />

        {/* Final CTA */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Grainy Texture implemented in globals.css noise-overlay inside RefractionOverlay */}
    </div>
  );
}
