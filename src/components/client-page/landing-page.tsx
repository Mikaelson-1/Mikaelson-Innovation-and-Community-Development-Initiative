import HomeHero from "@/components/client-page/hero";
import dynamic from "next/dynamic";

// Below-fold sections are code-split so their JS doesn't inflate the
// initial bundle or block main-thread parsing during hero render.
const OurEcosystemTabs = dynamic(() => import("@/components/client-page/our-ecosystem"), {
  loading: () => <div className="py-24" />,
});
const WhoItsFor = dynamic(() => import("@/components/client-page/audience"), {
  loading: () => <div className="py-24" />,
});
const ImpactSection = dynamic(
  () => import("@/features/website/components/impact-section"),
  { loading: () => <div className="py-16" /> }
);
const BlogSectionWrapper = dynamic(() => import("@/components/client-page/blog-wrapper"), {
  loading: () => <div className="py-16" />,
});

export default function Home() {
  return (
    <>
      <HomeHero />

      <main className="bg-[#ffffff] dark:bg-background px-5 lg:px-0">
        <OurEcosystemTabs />
        <WhoItsFor />
        <ImpactSection />
        <BlogSectionWrapper />
      </main>
    </>
  );
}
