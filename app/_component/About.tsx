"use client";

import Link from "next/link";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="#16a34a" strokeWidth="1.7" />
        <path d="M7 11h8M7 7.5h5M7 14.5h8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Online Expense Management",
    description:
      "Effortlessly manage and track business spend online with our cloud-based Expense Management System.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 18l1.5-4.5L14 5l3.5 3.5-8.5 8.5L4 18z" stroke="#16a34a" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="17.5" cy="5.5" r="2" stroke="#16a34a" strokeWidth="1.4" />
        <path d="M8 15l3-3" stroke="#16a34a" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: "Receipt Management using AI & WhatsApp",
    description:
      "Simplify receipt tracking and storage with our efficient digital solution powered by AI and WhatsApp.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3.5 7.5L11 4l7.5 3.5v6c0 3-7.5 5-7.5 5S3.5 16.5 3.5 13.5v-6z" stroke="#16a34a" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Travel & Expense Policy Automation",
    description:
      "Automate travel expenses and ensure policy compliance with our business management tool for SMEs.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="10" width="4" height="9" rx="1" stroke="#16a34a" strokeWidth="1.6" />
        <rect x="9" y="6" width="4" height="13" rx="1" stroke="#16a34a" strokeWidth="1.6" />
        <rect x="15" y="3" width="4" height="16" rx="1" stroke="#16a34a" strokeWidth="1.6" />
      </svg>
    ),
    title: "Projects, Events & Budget Setup",
    description:
      "Streamline budgeting for projects and events with precise financial tools and smart notifications.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="7.5" stroke="#16a34a" strokeWidth="1.6" />
        <path d="M11 7v4l3 2" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 4.5L4 3M17.5 4.5L19 3" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Mileage Allowance by Country's Law",
    description:
      "Automatically calculate mileage allowances per local laws with our smart mileage tool for business.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L4 6v5c0 4 3.5 7 7 8 3.5-1 7-4 7-8V6L11 3z" stroke="#16a34a" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="2.5" stroke="#16a34a" strokeWidth="1.4" />
      </svg>
    ),
    title: "Role-Based Accessibility & Security",
    description:
      "Secure your financial data with customizable role-based access controls and robust security features.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 11l4 4 8-8" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="11" cy="11" r="8" stroke="#16a34a" strokeWidth="1.5" />
      </svg>
    ),
    title: "Easy & Quick Setup (Plug and Play)",
    description:
      "Get started instantly with our plug-and-play cloud expense app designed for hassle-free setup.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 5h14v2H4zM4 9.5h10M4 12.5h12M4 15.5h8" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="15" r="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.3" />
        <path d="M15.5 15l1 1 2-2" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Auditing, Reporting & Compliance",
    description:
      "Enhance transparency with easy-to-use auditing and reporting features in our spend tracker.",
  },
];

const integrations = [
  "XERO",
  "QuickBooks",
  "AI Receipt Scan",
  "Policy Automation",
  "Role Access",
  "Mileage Tracking",
];

export default function About() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid — identical to Redefining */}
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
            Platform Features
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What{" "}
            <span className="text-green-500">we do?</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            We help you become better, grow faster and be mindful — all of it
            just by managing your expenses smarter.
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

        {/* ── Feature grid ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-3 rounded-2xl border border-green-100 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-green-300 hover:shadow-md hover:shadow-green-100"
            >
              {/* Top accent line on hover */}
              <span className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-green-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              {/* Icon */}
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50">
                {item.icon}
              </span>

              {/* Text */}
              <p className="text-sm font-extrabold leading-snug tracking-tight text-gray-900">
                {item.title}
              </p>
              <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                {item.description}
              </p>
              <span className=" text-green-500"><Link href="/features">Learn More → </Link></span>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-gray-500">
            Ready to take control of your business spending?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
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
          <p className="text-xs text-gray-400">
            ✓ No credit card required &nbsp;·&nbsp; ✓ 30-day free trial &nbsp;·&nbsp; ✓ Cancel anytime
          </p>
        </div>

      </div>
    </section>
  );
}