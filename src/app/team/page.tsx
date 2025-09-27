import JoinTeam from "@/features/website/components/team/join-our-team";
import TeamHeroSection from "@/features/website/components/team/team-hero-section";
import TeamSection from "@/features/website/components/team/team-section";

const TeamPage = () => {
  return (
    <div>
      <TeamHeroSection />
      <TeamSection />
      <JoinTeam />
    </div>
  );
};

export default TeamPage;
