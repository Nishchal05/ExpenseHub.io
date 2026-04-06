"use client";

import herofeature from "@/public/feature.jpeg";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "99.9%", label: "AI accuracy" },
  { value: "1-click", label: "Integrations" },
  { value: "80%", label: "Less manual work" },
];

const bullets = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    text: "99.9% accurate AI-powered expense tracking",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    text: "One-click integrations with XERO & QuickBooks",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 0" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    text: "Automate 80% of manual finance tasks — no IT required",
  },
];

const integrationTags = ["XERO", "QuickBooks", "AI Policy", "WhatsApp", "ML Scanning"];

export default function HeroFeatures() {
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
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Left: Content ── */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">

            {/* Badge */}
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Intelligent Expense Management
            </span>

            {/* Headline */}
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Where Business Spending{" "}
              <span className="text-green-500">Meets Intelligence</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
              ExpenseHub brings AI-powered automation, seamless integrations, and
              real-time visibility — so your finance team can focus on what
              actually matters.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 shadow-sm shadow-green-200">
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Integration pills */}
            <div className="flex flex-wrap gap-2">
              {integrationTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-green-100 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/signup"
                className="rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-md hover:shadow-green-300"
              >
                Sign up for free →
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
                Get a Demo
              </Link>
            </div>

            {/* Trust note */}
            <p className="text-xs text-gray-400">
              ✓ No credit card required &nbsp;·&nbsp; ✓ 30-day free trial &nbsp;·&nbsp; ✓ Cancel anytime
            </p>

            {/* Stat strip */}
            <div className="mt-2 flex flex-wrap gap-6 border-t border-green-100 pt-6">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-extrabold text-green-600">{s.value}</span>
                  <span className="text-xs text-gray-400">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            {/* Glow */}
            <div
              className="absolute h-64 w-64 rounded-full opacity-40 blur-3xl sm:h-80 sm:w-80"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,173,94,0.25) 0%, transparent 70%)",
              }}
            />

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 h-12 w-12 rounded-tl-2xl border-t-2 border-l-2 border-green-300 opacity-60" />
            <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-br-2xl border-b-2 border-r-2 border-green-300 opacity-60" />

            <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-green-100 shadow-xl shadow-green-100/50">
              <Image
                src={herofeature}
                alt="ExpenseHub feature preview"
                width={620}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                priority
              />

              {/* Floating badge on image */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-green-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-xs font-bold text-gray-700">
                  Live — Processing expenses now
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}