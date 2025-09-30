"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HeadingClipText } from "@/components/heading-backgroun-clip";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface AnimatedSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  className = "",
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`mx-auto mt-8 w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-200 px-3 lg:px-7 py-12 text-center ${className}`}
    >
      {/* Heading */}
      <motion.div variants={itemVariants}>
        <HeadingClipText title={title} />
      </motion.div>

      {/* Paragraph */}
      <motion.div
        variants={itemVariants}
        className="bg-white text-black py-8 px-5 rounded-[2rem]"
      >
        <p className="text-center text-xl font-medium leading-[32.64px]">
          {description}
        </p>
      </motion.div>

      {/* Button (optional) */}
      {buttonText && buttonLink && (
        <motion.div variants={itemVariants}>
          <Link href={buttonLink} className="no-underline">
            <button
              type="button"
              className="mikaelson-button community-btn mt-8 inline-flex h-[55px] items-center gap-3 rounded-full bg-gray-900 px-6 text-lg font-semibold text-white shadow hover:bg-black"
            >
              <span className="button-text">{buttonText}</span>
              <span className="button-icon inline-flex h-8 w-8 items-center justify-center">
                <img src="/icons/arrow.svg" alt="arrow" className="h-4 w-4" />
              </span>
            </button>
          </Link>
        </motion.div>
      )}

      {/* Image (optional) */}
      {imageSrc && (
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-8 text-center"
        >
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="floating-image mx-auto max-w-[80%] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default AnimatedSection;
