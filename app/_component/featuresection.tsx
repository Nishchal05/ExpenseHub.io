"use client";

import Image from "next/image";
import event from "@/public/event.jpeg";
import anlyses from "@/public/analytics.jpeg";
import product from "@/public/project-management.jpeg";

const items = [
  {
    img: event,
    tag: "Free Trial",
    description:
      "Get a 30-day free trial — no credit card required. Schedule a demo or sign up today!",
  },
  {
    img: anlyses,
    tag: "ROI & Analytics",
    description:
      "See the ROI, measure the efficiency, and experience the real difference yourself.",
  },
  {
    img: product,
    tag: "Customizable",
    description:
      "Customize your setup your way — if something's missing, we'll make it right.",
  },
];

export default function FeatureSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-4 sm:px-8 lg:px-12">

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top green rule */}
      <div className="relative z-10 mx-auto mb-8 max-w-7xl">
        <div className="h-px w-full bg-green-100" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((val, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-2xl border border-green-100 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-md hover:shadow-green-100"
            >
              {/* Image thumbnail */}
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-green-100">
                <Image
                  src={val.img}
                  alt={val.tag}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="56px"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-green-700">
                  <span className="h-1 w-1 rounded-full bg-green-500" />
                  {val.tag}
                </span>
                <p className="text-sm leading-relaxed text-gray-500">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom green rule */}
      <div className="relative z-10 mx-auto mt-8 max-w-7xl">
        <div className="h-px w-full bg-green-100" />
      </div>

    </section>
  );
}