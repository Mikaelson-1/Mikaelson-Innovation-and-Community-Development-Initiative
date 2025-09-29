import React from "react";

const LabsHeroSection: React.FC = () => {
  return (
    <section className="relative bg-[rgba(92,225,230,0.5)] py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
              INNOVATION LABS
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Building Tomorrow&apos;s Solutions Today
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Our Innovation Labs are where breakthrough ideas meet cutting-edge
              technology. We develop practical solutions for real-world
              challenges facing African communities.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-200">
                Explore Projects
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-6 py-3 rounded-xl shadow transition-all duration-200">
                Join Our Lab
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5V19M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="/assets/images/hero-img.jpg"
              alt="Innovation Lab"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px] lg:h-[500px]"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabsHeroSection;
