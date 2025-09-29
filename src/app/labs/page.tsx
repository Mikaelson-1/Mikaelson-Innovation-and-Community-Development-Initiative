import LabsCollaborationSection from "@/features/website/components/labs/labs-collaboration";
import LabsFeaturedProjects from "@/features/website/components/labs/labs-featured-section";
import LabsHeroSection from "@/features/website/components/labs/labs-hero";
import LabsInnovationProcess from "@/features/website/components/labs/labs-innovation-process";
import LabsTeamSection from "@/features/website/components/labs/labs-team-section";
import LabsWhatWeDo from "@/features/website/components/labs/labs-what-we-do";
import React from "react";

const LabsPage = () => {
  return (
    <div>
      <LabsHeroSection />
      <LabsWhatWeDo />
      <LabsFeaturedProjects />
      <LabsInnovationProcess />
      <LabsTeamSection />
      <LabsCollaborationSection />
    </div>
  );
};

export default LabsPage;
