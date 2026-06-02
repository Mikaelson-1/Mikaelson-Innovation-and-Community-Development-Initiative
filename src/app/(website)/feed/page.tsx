"use client";

import dynamicImport from 'next/dynamic';

const SocialFeed = dynamicImport(() => import('./feed-content'), { ssr: false });

export default function FeedPage() {
  return <SocialFeed />;
}
