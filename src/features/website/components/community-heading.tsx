"use client";
import React from "react";
import Link from "next/link";

const CommunityHeading: React.FC = () => {
  return (
    <section
      className="visible mx-auto mt-8 w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-12 text-center"
      data-aos="fade-up"
    >
      <div>
        <h2 className="mb-6 text-[2.3rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          The Mikaelson Community
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="text-gray-800">
          The Mikaelson Community is a vibrant network of ambitious students and
          changemakers across Africa, united by excellence and intentional
          growth.
        </p>
      </div>

      <Link href="/community" className="no-underline">
        <button
          type="button"
          className="mikaelson-button community-btn mt-8 inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-900 px-6 text-lg font-semibold text-white shadow hover:bg-black"
        >
          <span className="button-text">Join our community</span>
          <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
            <img src="/icons/arrow.svg" alt="arrow" className="h-4 w-4" />
          </span>
        </button>
      </Link>

      <div className="animated-image-container mx-auto mt-8 text-center">
        <img
          src="/assets/images/Macbook-pro.jpg"
          alt="Mikaelson Community on MacBook"
          className="floating-image mx-auto max-w-[80%] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
};

export default CommunityHeading;
