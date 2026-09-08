'use client';

import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import BlogsSection from '@/components/sections/BlogsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import PlanetEarth from '@/components/ui/PlanetEarth';
import PlanetMars from '@/components/ui/PlanetMars';
import PlanetSaturn from '@/components/ui/PlanetSaturn';
import StarField from '@/components/ui/StarField';
import Astronaut from '@/components/ui/Astronaut';
import Moon from '@/components/ui/Moon';

export default function HomePages() {
  return (
    <main className="min-h-screen relative">
      {/* Background Elements */}
      <Astronaut />
      <Moon />
      <PlanetEarth />
      <PlanetMars />
      <PlanetSaturn />
      <StarField />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
