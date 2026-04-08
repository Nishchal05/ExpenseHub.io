"use client";

import Image from "next/image";
import Link from "next/link";
import featureImg1 from "@/public/featuresection1_1.jpeg";   // replace with your actual image paths
import featureImg2 from "@/public/featuresection1_2.jpeg";   // replace with your actual image paths

// ── Block 1 features (right-side list) ────────────────────────────────────────
const policyFeatures = [
  "Set spending limits per category, team, or project",
  "Auto-flag policy violations before submission",
  "Role-based approval workflows built in",
];

// ── Block 2 features (left-side list) ─────────────────────────────────────────
const analyticsFeatures = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13" /><path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    title: "Seamless Integration with Accounting",
    description:
      "ExpenseHub integrates effortlessly with XERO and QuickBooks, ensuring smoother financial management across your entire business.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
    title: "In-depth Reporting and Analytics",
    description:
      "Gain insights into your spending with detailed reports. Analyze trends, track performance against budgets, and make smarter decisions.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Real-Time Expense Tracking & Workflow",
    description:
      "Whether it's travel or office supplies, get instant access to spending data — enabling better budget management and financial planning.",
  },
];

export default function PowerfulFeatures() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">

        {/* ══════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════ */}
        <div className="mx-auto mb-14 max-w-2xl pt-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
            Powerful Features
          </span>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Explore our{" "}
            <span className="text-green-500">Powerful Features</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Discover the tools that simplify Expense Management — Powerful,
            Automated, and Built for efficiency.
          </p>
        </div>

        {/* ══════════════════════════════════════════
            BLOCK 1 — Image left · Content right
        ══════════════════════════════════════════ */}
        <div className="mb-6 flex flex-col items-center gap-10 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-10 lg:flex-row lg:gap-16">

          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <div
              className="absolute -top-4 -left-4 h-24 w-24 rounded-full opacity-30 blur-2xl"
              style={{ background: "rgba(42,173,94,0.4)" }}
            />
            <div className="overflow-hidden rounded-2xl border border-green-100">
              <Image
                src={featureImg1}
                alt="Customizable Expense Policies"
                width={620}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex w-full flex-col gap-5 lg:w-1/2">
            <span className="text-sm font-semibold text-green-600">
              Try for yourself and then decide!
            </span>
            <h3 className="text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
              Customizable{" "}
              <span className="text-green-500">Expense Policies</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
              Set up specific rules and limits for different types of expenses,
              ensuring that all expenditures comply with company policies.
            </p>

            {/* Bullet checklist */}
            <ul className="flex flex-col gap-3">
              {policyFeatures.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
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

            <div className="pt-1">
              <Link
                href="/features/policies"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-md hover:shadow-green-300"
              >
                Know more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BLOCK 2 — Content left · Image right
        ══════════════════════════════════════════ */}
        <div className="mb-16 flex flex-col-reverse items-center gap-10 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-10 lg:flex-row lg:gap-16">

          {/* Content */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {analyticsFeatures.map((feat) => (
              <div key={feat.title} className="flex items-start gap-4">
                {/* Icon circle */}
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 shadow-sm shadow-green-200">
                  {feat.icon}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-extrabold text-gray-900 sm:text-base">
                    {feat.title}
                  </p>
                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="pt-1">
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-md hover:shadow-green-300"
              >
                Find out yourself
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full opacity-30 blur-2xl"
              style={{ background: "rgba(42,173,94,0.4)" }}
            />
            <div className="overflow-hidden rounded-2xl border border-green-100">
              <Image
                src={featureImg2}
                alt="Analytics and Integrations"
                width={620}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}