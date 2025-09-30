"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";

// Media item types
type MediaType = "video" | "image" | "audio" | "story";

interface BaseItem {
  id: string;
  type: MediaType;
  title: string;
  description: string;
  date: string;
  tag?: string;
}

interface VideoItem extends BaseItem {
  type: "video";
  youtubeId: string;
}

interface ImageItem extends BaseItem {
  type: "image";
  imageSrc: string;
}

interface AudioItem extends BaseItem {
  type: "audio";
  listenUrl: string;
}

interface StoryItem extends BaseItem {
  type: "story";
  quote: string;
  author: string;
}

type MediaItem = VideoItem | ImageItem | AudioItem | StoryItem;

// Dummy content
const ALL_ITEMS: MediaItem[] = [
  {
    id: "video-1",
    type: "video",
    title: "EKSU Campus Visit",
    description: "Engagement with students during campus activation.",
    date: "2025-07-12",
    tag: "Campus",
    youtubeId: "x8nYGAWlLnQ",
  },
  {
    id: "image-1",
    type: "image",
    title: "Community Events",
    description: "Collaboration and growth moments across sessions.",
    date: "2025-06-30",
    tag: "Event",
    imageSrc: "/images/community-events.jpg",
  },
  {
    id: "audio-1",
    type: "audio",
    title: "Student Voices: 30-Day Reset",
    description: "Reflections on habit transformation.",
    date: "2025-05-18",
    tag: "Podcast",
    listenUrl: "https://x.com/i/spaces",
  },
  {
    id: "story-1",
    type: "story",
    title: "Mindset Shift",
    description: "A story of renewed discipline and purpose.",
    date: "2025-05-02",
    tag: "Impact",
    quote:
      "“The Initiative gave me the structure I needed to finally take my life seriously.”",
    author: "— Student, Wesley University",
  },
];

// Filters
const FILTERS = ["All", "Videos", "Images", "Audio", "Stories"] as const;
type Filter = (typeof FILTERS)[number];

export default function MediaStories() {
  const [filter, setFilter] = useState<Filter>("All");

  const items = useMemo(() => {
    if (filter === "All") return ALL_ITEMS;

    const map: Record<Exclude<Filter, "All">, MediaType> = {
      Videos: "video",
      Images: "image",
      Audio: "audio",
      Stories: "story",
    };

    const mediaType = map[filter];
    return ALL_ITEMS.filter((i) => i.type === mediaType);
  }, [filter]);

  return (
    <section
      className="media-stories-section hidden visible px-4 py-16"
      data-aos="fade-up"
    >
      <div className="media-container mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="media-header mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#111]">
              Media & Stories
            </h2>
            <p className="text-gray-700">
              Highlights from campuses, events and student impact journeys.
            </p>
          </div>
          <div className="inline-flex rounded-full bg-gray-100 p-1 text-sm">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`media-filter-btn rounded-full px-4 py-2 transition-colors ${
                  filter === f
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="media-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BadgeProps {
  children: React.ReactNode;
  kind: MediaType;
}

function Badge({ children, kind }: BadgeProps) {
  const kindClass =
    kind === "video"
      ? "bg-red-100 text-red-700"
      : kind === "image"
      ? "bg-blue-100 text-blue-700"
      : kind === "audio"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-purple-100 text-purple-700";
  return (
    <span
      className={`media-badge rounded-full px-2 py-0.5 text-xs ${kindClass}`}
    >
      {children}
    </span>
  );
}

interface CardProps {
  item: MediaItem;
}

function Card({ item }: CardProps) {
  return (
    <div className="media-card overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="media-thumb relative">
        {item.type === "video" ? (
          <div className="video-wrapper aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={item.title}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : item.type === "image" ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        ) : item.type === "audio" ? (
          <div className="audio-wrapper flex aspect-video w-full items-center justify-center bg-gray-100">
            <button
              className="twitter-play-btn inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white hover:bg-black"
              onClick={() =>
                window.open(item.listenUrl, "_blank", "noopener,noreferrer")
              }
            >
              <span className="i fa-play-circle" />
              <span>Play Twitter Space</span>
            </button>
          </div>
        ) : (
          <div className="story-body flex aspect-video w-full flex-col items-center justify-center bg-gray-50 p-6 text-center">
            <p className="story-quote text-lg italic text-gray-800">
              {item.quote}
            </p>
            <p className="story-author mt-2 text-sm text-gray-600">
              {item.author}
            </p>
          </div>
        )}
      </div>
      <div className="media-content space-y-2 p-5">
        <div className="media-meta flex items-center gap-2">
          <Badge kind={item.type}>{item.type}</Badge>
          {item.tag ? (
            <span className="media-tag rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
              {item.tag}
            </span>
          ) : null}
        </div>
        <h3 className="media-item-title text-lg font-semibold text-gray-900">
          {item.title}
        </h3>
        <p className="media-description text-sm text-gray-700">
          {item.description}
        </p>
        <div className="media-footer flex items-center justify-between pt-2 text-sm text-gray-600">
          {item.type === "video" ? (
            <Link
              href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
              target="_blank"
              className="media-cta rounded-full bg-gray-900 px-3 py-1 text-white hover:bg-black"
            >
              Watch Video
            </Link>
          ) : item.type === "image" ? (
            <a
              href={item.imageSrc}
              target="_blank"
              className="media-cta rounded-full bg-gray-900 px-3 py-1 text-white hover:bg-black"
            >
              View
            </a>
          ) : item.type === "audio" ? (
            <button
              onClick={() =>
                window.open(item.listenUrl, "_blank", "noopener,noreferrer")
              }
              className="media-cta rounded-full bg-gray-900 px-3 py-1 text-white hover:bg-black"
            >
              Listen
            </button>
          ) : (
            <span />
          )}
          <span className="media-date">{item.date}</span>
        </div>
      </div>
    </div>
  );
}
