import { Footer } from "@/components/footer";
import CommunityHeading from "@/features/website/components/community-heading";
import EcosystemSection from "@/features/website/components/ecosystem-section";
import { ExploreMore } from "@/features/website/components/explore-more";
import HomeHero from "@/features/website/components/hero";
import ImpactSection from "@/features/website/components/impact-section";
import LabsHeading from "@/features/website/components/lab-heading";
import MediaStories from "@/features/website/components/media-stories";
import PartnershipHeading from "@/features/website/components/partnership-heading";

export default function Home() {
  return (
    <>
      <HomeHero />
      <EcosystemSection />
      <CommunityHeading />
      <LabsHeading />
      <PartnershipHeading />
      <ImpactSection />
      <MediaStories />
      <ExploreMore />
      <Footer />
    </>
  );
}
