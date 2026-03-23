"use client";

import Image from "next/image";
import round      from "@/public/round.png";
import quickest   from "@/public/quickest.svg";
import innovation from "@/public/innovation.png";

const services = [
  {
    img:         round,
    label:       "Support",
    title:       "Round-the-Clock Support",
    description: "Our team provides 24/7 support to help you maximize your use of our Expense Management System. Real humans, real fast responses — any time, any day.",
    highlight:   false,
  },
  {
    img:         quickest,
    label:       "Onboarding",
    title:       "Quickest Setup",
    description: "Our Business Spend Management App goes live quickly, ensuring minimal disruption to your operations. Be up and running in minutes, not days.",
    highlight:   true,
  },
  {
    img:         innovation,
    label:       "Innovation",
    title:       "Continuous Innovation",
    description: "Stay ahead with regular updates that bring the latest in expense management technology to your fingertips — with full enterprise-grade security.",
    highlight:   false,
  },
];

export default function Service() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid */}
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
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Our Services
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Enjoy Our{" "}
            <span className="text-green-500">Excellent Service</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Unmatched service and 99% uptime — just to make sure you have a
            great day at work, every single day.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {services.map(({ img, label, title, description, highlight }) => (
            <div
              key={title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg
                ${highlight
                  ? "border-green-400 bg-green-500 shadow-md shadow-green-200"
                  : "border-gray-100 bg-white shadow-sm hover:border-green-200 hover:shadow-green-100"
                }`}
            >
              {/* Top accent line for non-highlight cards */}
              {!highlight && (
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-green-400 to-green-500 transition-transform duration-300 group-hover:scale-x-100" />
              )}

              {/* Image area */}
              <div className={`flex h-44 w-full items-center justify-center px-8 sm:h-48
                ${highlight ? "bg-green-400/40" : "bg-green-50"}`}
              >
                <Image
                  src={img}
                  alt={title}
                  className="h-full w-auto max-h-32 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">

                {/* Label pill */}
                <span className={`w-fit rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider
                  ${highlight
                    ? "border-green-300/50 bg-green-400/30 text-white"
                    : "border-green-100 bg-green-50 text-green-700"
                  }`}
                >
                  {label}
                </span>

                {/* Title */}
                <h3 className={`text-lg font-extrabold leading-tight sm:text-xl
                  ${highlight ? "text-white" : "text-gray-900 group-hover:text-green-700"}`}
                >
                  {title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed
                  ${highlight ? "text-green-50" : "text-gray-500"}`}
                >
                  {description}
                </p>

                {/* Learn more */}
                <div className="mt-auto pt-2">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200
                    ${highlight
                      ? "text-white opacity-80 hover:opacity-100"
                      : "text-green-600 opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Uptime badge strip ── */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: "99.9%",  label: "Uptime SLA"       },
            { value: "24/7",   label: "Support Hours"    },
            { value: "< 2 min", label: "Avg. Response"   },
            { value: "5 min",  label: "Setup Time"       },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 rounded-2xl border border-gray-100 bg-white py-4 shadow-sm">
              <span className="text-lg font-extrabold text-green-500 sm:text-xl">{value}</span>
              <span className="text-xs font-medium text-gray-400">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}