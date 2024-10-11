"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";

export default function FetchFrontendDemo() {
  useEffect(() => {
    console.log("Fetch Frontend Demo page visited");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">Fetch Frontend Demo</h1>
      
      {/* Video Embed or Video Tag */}
      <div className="mb-6">
        <video width="1500" controls>
          <source src="/demo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Back to Home Link */}
      <Link href="/" prefetch={false} className="text-blue-500 hover:underline">
        Go back to Home
    </Link>
    </div>
  );
}
