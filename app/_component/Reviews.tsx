"use client";

import mitaliprofile from "@/public/mitali R.jpg";
import Shawnprofile from "@/public/shawn.jpeg";
import ranjuprofile from "@/public/ranju.jpeg";
import nicohprofile from "@/public/nicoh.jpeg";
import icon from "@/public/Icon.png";
import Image from "next/image";
import type { StaticImageData } from "next/image";

const reviews: {
  review: string;
  profilepic: StaticImageData;
  name: string;
  position: string;
  initials: string;
}[] = [
  {
    review:
      "“Thank you for saving my time and money. This software is a lifesaver. I've been using it for 4 months now and I don't have any complaints.”",
    profilepic: mitaliprofile,
    name: "Mitali R",
    position: "Finance Director — Ayug Ent.",
    initials: "MR",
  },
  {
    review:
      "“Very nice application, the implementation was quick and we went live in 2 days after 7 days of exploration. I am satisfied.”",
    profilepic: Shawnprofile,
    name: "Shawn G",
    position: "Finance Manager — The Unbalance",
    initials: "SG",
  },
  {
    review:
      "“I could probably go into sales for you. The service was excellent. My team has no complaints — we are processing expenses much faster.”",
    profilepic: ranjuprofile,
    name: "Ranju S",
    position: "Management Accountant — Ayyeah",
    initials: "RS",
  },
  {
    review:
      "“I have used other expense applications before. ExpenseHub does everything at half the price and looks neat. Way to go!”",
    profilepic: nicohprofile,
    name: "Nicoh R",
    position: "Finance Controller — SA Cricket",
    initials: "NR",
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#16a34a">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625.59-3.44L2 4.635l3.455-.505L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Review() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid — matches Redefining */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Customer Reviews
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What our{" "}
            <span className="text-green-500">Customers say</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Proudly the only expense management software that has evolved from
            user feedback — no assumptions, just results.
          </p>
        </div>

        {/* ── Review cards grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {reviews.map((val) => (
            <div
              key={val.name}
              className="group relative flex flex-col justify-between gap-5 rounded-2xl border border-green-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-md hover:shadow-green-100"
            >
              {/* Top accent line on hover */}
              <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-green-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Quote icon + stars */}
              <div className="flex items-start justify-between">
                <Image
                  src={icon}
                  alt="quote icon"
                  width={32}
                  height={32}
                  className="opacity-80"
                />
                <StarRow />
              </div>

              {/* Review text */}
              <p className="flex-1 text-sm leading-relaxed text-gray-600 sm:text-[15px]">
                {val.review}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-green-100" />

              {/* Profile row */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-green-200">
                  <Image
                    src={val.profilepic}
                    alt={val.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-extrabold text-gray-900">
                    {val.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {val.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}