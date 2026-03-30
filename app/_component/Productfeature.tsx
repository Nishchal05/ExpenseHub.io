"use client";

import Image from "next/image";
import Link from "next/link";
import img from "@/public/MacBook Air (2022).png";

const features = [
  "Easy receipt scans — Uber, hotel, any format",
  "Credit card expense to receipt matching in one click",
  "Single-click transfer to XERO integration",
  "Single-click transfer to QuickBooks integration",
  "Mileage allowance tracking built-in",
];

const integrations = ["XERO", "QuickBooks", "ML Scanning", "AI Policy", "Departmental Reports"];

export default function Redefining() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Top header ── */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Product Features
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Redefining{" "}
            <span className="text-green-500">Product Features</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            From XERO integration and QuickBook sync to departmental reporting — from
            scanning receipts via machine learning to implementing policy via
            artificial intelligence, all designed for your company.
          </p>

          {/* Integration pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {integrations.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Main content: text left, image right ── */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left — content */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">

            {/* Section badge */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-green-700">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Modernized
              </span>
            </div>

            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Business Spend Management{" "}
              <span className="text-green-500">Modernized</span>
            </h3>

            {/* Feature list */}
            <ul className="flex flex-col gap-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  {/* Check icon */}
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 shadow-sm shadow-green-200">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/signup"
                className="rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-md hover:shadow-green-300"
              >
                Start now for free →
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all duration-200 hover:border-green-300 hover:text-green-600"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <svg width="7" height="9" viewBox="0 0 8 10" fill="white">
                    <path d="M1 1l6 4-6 4V1z" />
                  </svg>
                </span>
                Get a demo
              </Link>
            </div>

            {/* Trust note */}
            <p className="text-xs text-gray-400">
              ✓ No credit card required &nbsp;·&nbsp; ✓ 30-day free trial &nbsp;·&nbsp; ✓ Cancel anytime
            </p>
          </div>

          {/* Right — MacBook image */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            {/* Glow behind image */}
            <div
              className="absolute h-64 w-64 rounded-full opacity-40 blur-3xl sm:h-80 sm:w-80"
              style={{ background: "radial-gradient(circle, rgba(42,173,94,0.25) 0%, transparent 70%)" }}
            />
            <Image
              src={img}
              alt="ExpenseHub on MacBook"
              width={580}
              className="relative z-10 h-auto w-full max-w-sm drop-shadow-xl sm:max-w-md lg:max-w-full"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}