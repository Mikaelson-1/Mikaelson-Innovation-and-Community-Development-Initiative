"use client";
import React from "react";
import Link from "next/link";

const LabsHeading: React.FC = () => {
  return (
    <section
      className="visible mx-auto mt-8 w-full max-w-[1200px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-12 text-center"
      data-aos="fade-up"
    >
      <div>
        <h2 className="mb-6 text-[2.3rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          Mikaelson Labs
        </h2>
      </div>

      <div className="mx-auto max-w-3xl">
        <p className="text-gray-800">
          Mikaelson Labs is our innovation hub where we build and experiment
          with new ideas to solve challenges across Africa.
        </p>
      </div>

      <Link href="/labs" className="no-underline">
        <button
          type="button"
          className="mikaelson-button labs-btn mt-8 inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-900 px-6 text-lg font-semibold text-white shadow hover:bg-black"
        >
          <span className="button-text">Contribute to Labs</span>
          <span className="button-icon labs-arrow-bg inline-flex h-8 w-8 items-center justify-center">
            <img src="/icons/arrow.svg" alt="arrow" className="h-4 w-4" />
          </span>
        </button>
      </Link>

      <div className="animated-image-container mx-auto mt-8 text-center">
        <img
          src="/assets/images/Desktop-image.jpg"
          alt="Mikaelson Labs on Monitor"
          className="scale-in-image mx-auto max-w-[80%] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
        />
      </div>
    </section>
  );
};

export default LabsHeading;
