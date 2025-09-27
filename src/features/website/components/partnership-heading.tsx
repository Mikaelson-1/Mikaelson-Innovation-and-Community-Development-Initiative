"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PartnershipHeading: React.FC = () => {
  return (
    <section
      className="visible mx-auto mt-8 w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-12 text-center"
      data-aos="fade-up"
    >
      <div>
        <h2 className="mb-6 text-[2.3rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          Partnership & Growth Network
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="text-gray-800">
          Our network connects students with mentors, resources, and
          opportunities to foster collaboration and accelerate growth.
        </p>
      </div>

      <Link href="/sponsor" className="no-underline">
        <button
          type="button"
          className="mikaelson-button network-btn mt-8 inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-100 px-6 text-lg font-semibold text-gray-900 shadow hover:bg-gray-200"
        >
          <span className="button-text">Sponsor a Program</span>
          <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
            <ArrowRight />
          </span>
        </button>
      </Link>

      <div className="animated-image-container mx-auto mt-8 text-center">
        <img
          src="/assets/images/iPad Image Presentation.jpg"
          alt="Partnership & Growth Network on iPad"
          className="rotate-in-image mx-auto max-w-[80%] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
};

export default PartnershipHeading;
