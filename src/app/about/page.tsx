import { AboutHeader } from '@/features/website/components/about/about-header';
import { AboutOrganization } from '@/features/website/components/about/about-organisation';
import { ImpactStats } from '@/features/website/components/about/impact-stats';
import { JoinSection } from '@/features/website/components/about/join-section';
import { OurStory } from '@/features/website/components/about/our-story';
import { TeamSection } from '@/features/website/components/about/team-section';
import { WhatWeDo } from '@/features/website/components/about/what-we-do';
import React from 'react'

const AboutPage = () => {
  return (
    <main className="about-container px-6 py-10">
      <AboutHeader />
      <AboutOrganization />
      <OurStory />
      <WhatWeDo />
      <ImpactStats />
      <TeamSection />
      <JoinSection />
    </main>
  );
}

export default AboutPage