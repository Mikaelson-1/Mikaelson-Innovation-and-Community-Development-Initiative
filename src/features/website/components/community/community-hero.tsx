import React from "react";
import { Users, Flame, ArrowRight, LogIn, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LiveStats {
  activeMembers: number;
  totalStreaks: number;
  countriesReached: number;
}

interface HeroSectionProps {
  isAuthenticated: boolean;
  liveStats: LiveStats;
}

const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

const CommunityHeroSection: React.FC = ({}) => {
  const liveStats = {
    activeMembers: 3247,
    totalStreaks: 18653,
    countriesReached: 52,
  };

  return (
    <section className="relative w-full bg-white py-16">
      <div className="container mx-auto flex flex-col  items-center px-6 gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Transform Your Life Through
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Community & Growth
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Connect with like-minded individuals across Africa, track your
            progress, and achieve your goals together. Experience the power of
            accountability and shared success.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <span className="block text-xl font-bold">
                  {formatNumber(liveStats.activeMembers)}+
                </span>
                <span className="text-sm text-gray-500">Active Members</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow">
              <Flame className="w-8 h-8 text-orange-500" />
              <div>
                <span className="block text-xl font-bold">
                  {formatNumber(liveStats.totalStreaks)}+
                </span>
                <span className="text-sm text-gray-500">Daily Streaks</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl shadow">
              <User className="w-8 h-8 text-green-600" />
              <div>
                <span className="block text-xl font-bold">
                  {liveStats.countriesReached}+
                </span>
                <span className="text-sm text-gray-500">Countries</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              href="/signup"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gray-100 text-gray-800 font-semibold shadow hover:bg-gray-200 transition"
            >
              <span>Sign In</span>
              <LogIn className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex w-full lg:max-w-3xl justify-center overflow-hidden h-[500px] bg-gray-300/50 px-20 py-3 rounded">
          <Image
            src="/assets/images/IMG_3412 2.jpg"
            alt="Community Hero"
            width={500}
            height={550}
            className="rounded-md hover:scale-100 duration-200 transition-transform shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityHeroSection;
