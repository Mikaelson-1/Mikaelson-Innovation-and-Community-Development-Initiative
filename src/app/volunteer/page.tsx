import VolunteerFAQ from "@/features/website/components/volunteer/volunteer-faq";
import VolunteerForm from "@/features/website/components/volunteer/volunteer-form";
import { VolunteerHero } from "@/features/website/components/volunteer/volunteer-hero";
import WhyVolunteer from "@/features/website/components/volunteer/why-volunteer";
import React from "react";

const VolunteerPage = () => {
  return (
    <div className="">
      <VolunteerHero />
      <VolunteerFAQ />
      <WhyVolunteer />
      <VolunteerForm />
    </div>
  );
};

export default VolunteerPage;
