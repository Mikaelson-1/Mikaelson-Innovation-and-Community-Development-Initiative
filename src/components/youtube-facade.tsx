"use client";

import { useState } from "react";
import Image from "next/image";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeFacade({ videoId, title, className = "" }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className={`absolute inset-0 w-full h-full ${className}`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
      className={`absolute inset-0 w-full h-full group cursor-pointer ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* dark overlay */}
      <span className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-200" />
      {/* play button */}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
