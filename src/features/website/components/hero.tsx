"use client";
import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="px-8 py-20" data-aos="fade-up">
      <div className="mx-auto max-w-[1200px] rounded-3xl bg-[rgba(92,225,230,0.5)] p-8 text-left md:p-8 min-h-[550px]">
        <div className="relative mx-auto flex max-w-[1400px] items-stretch justify-between gap-10">
          {/* Text Content */}
          <div
            className="z-10 flex max-w-[600px] flex-1 flex-col items-start justify-start pt-8 text-left"
            data-aos="fade-right"
          >
            <h1 className="m-0 text-[2.1rem] font-bold leading-[1.2] text-[#111111]">
              We&apos;re Building Africa&apos;s Future - one Student, One Idea, One Action
              at a Time.
            </h1>
            <p className="mt-[1.2rem] text-[1.1rem] font-normal leading-[1.6] text-[#222222]">
              The Mikaelson Initiative is a youth-driven movement using
              technology, intentional living, and community to transform Africa
              from the inside out. We&apos;re starting with students. We&apos;re staying
              with purpose.
            </p>
          </div>

          {/* Video */}
          <div
            className="flex max-w-[700px] flex-1 items-center justify-center"
            data-aos="fade-left"
          >
            <div className="flex aspect-video w-full max-w-[620px] items-center justify-center overflow-hidden rounded-[1.2rem] bg-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)]">
              <iframe
                className="h-full w-full rounded-xl"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/x8nYGAWlLnQ"
                title="YouTube video"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
