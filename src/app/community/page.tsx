import CommunityChapters from "@/features/website/components/community/community-chapter";
import CommunityCTA from "@/features/website/components/community/community-cta";
import FeaturesOverview from "@/features/website/components/community/community-features";
import CommunityHeroSection from "@/features/website/components/community/community-hero";
import React from "react";

const CommunityPage = () => {
  return (
    <div>
      <CommunityHeroSection />
      <FeaturesOverview />
      <CommunityChapters />
      <CommunityCTA />
    </div>
  );
};

export default CommunityPage;
