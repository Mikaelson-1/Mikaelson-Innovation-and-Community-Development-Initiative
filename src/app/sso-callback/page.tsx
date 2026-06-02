"use client";

import dynamicImport from 'next/dynamic';

const SSOContent = dynamicImport(() => import('./sso-content'), { ssr: false });

export default function SSOCallbackPage() {
  return <SSOContent />;
}
