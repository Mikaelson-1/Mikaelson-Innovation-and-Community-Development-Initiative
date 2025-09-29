"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function EcosystemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="visible relative z-[1] mx-auto flex max-w-[1200px] flex-col items-center justify-center bg-white px-4 pt-4 pb-16"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <h2 className="mx-auto mb-8 text-center text-[2.3rem] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111111]">
          A Home for Builders, Believers, and Doers
        </h2>
        <button
          type="button"
          disabled
          className="pointer-events-none inline-flex h-[60px] w-[260px] cursor-default items-center justify-center rounded-[2.5rem] bg-gray-800 px-6 text-[1.25rem] font-bold tracking-[1px] text-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
        >
          Our Ecosystem
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="mikaelson-buttons-container mt-8 flex flex-wrap items-center justify-center gap-6"
      >
        <Link href="/community" className="no-underline">
          <button className="mikaelson-button community-btn inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-900 px-5 text-base font-medium text-white shadow-sm hover:bg-black">
            <span className="button-text">The Mikaelson Community</span>
            <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
              <img src="/icons/arrow.svg" alt="arrow" className="h-4 w-4" />
            </span>
          </button>
        </Link>

        <Link href="/labs" className="no-underline">
          <button className="mikaelson-button labs-btn inline-flex h-[55px] items-center gap-3 rounded-full border border-gray-300 bg-white px-5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50">
            <span className="button-text">Mikaelson Labs</span>
            <span className="button-icon labs-arrow-bg inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900">
              <img src="/icons/arrow.svg" alt="arrow" className="h-4 w-4" />
            </span>
          </button>
        </Link>

        <Link href="/sponsor" className="no-underline">
          <button className="mikaelson-button network-btn inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-100 px-5 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-200">
            <span className="button-text">Partnership & Growth Network</span>
            <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
              <img
                src="/icons/black-arrow.svg"
                alt="arrow"
                className="h-4 w-4"
              />
            </span>
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
