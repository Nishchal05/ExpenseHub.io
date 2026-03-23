"use client";

import Image, { StaticImageData } from "next/image";
import automated  from "@/public/automation.png";
import Insightful from "@/public/insightfull.png";
import Employment from "@/public/employment.png";
import Secure     from "@/public/secure.png";
import Great      from "@/public/great.png";

type DiscoveredKey = "automated" | "Insightful" | "Employee" | "Secure" | "Great";

const info: Record<DiscoveredKey, StaticImageData> = {
  automated:  automated,
  Insightful: Insightful,
  Employee:   Employment,
  Secure:     Secure,
  Great:      Great,
};

const features: {
  key: DiscoveredKey;
  title: string;
  label: string;
  description: string;
  accent: string;
}[] = [
  {
    key: "automated",
    label: "Automation",
    title: "Fully Automated",
    description:
      "Transform how you manage receipts and reports with our Expense Report Software. Cut manual work and let automation do the heavy lifting.",
    accent: "bg-green-50 border-green-200",
  },
  {
    key: "Insightful",
    label: "Analytics",
    title: "Insightful Analytics",
    description:
      "Optimize your spending with deep insights from our top spend management software. Make data-driven decisions with real-time dashboards.",
    accent: "bg-green-50 border-green-200",
  },
  {
    key: "Employee",
    label: "Employee Tools",
    title: "Employee-First Design",
    description:
      "Empower your employees with tools to manage and report expenses effortlessly — so your finance team can focus on what matters most: growth.",
    accent: "bg-green-50 border-green-200",
  },
  {
    key: "Secure",
    label: "Security",
    title: "Bank-Grade Security",
    description:
      "Protect sensitive financial information with advanced encryption and security measures built to meet enterprise compliance standards.",
    accent: "bg-green-50 border-green-200",
  },
  {
    key: "Great",
    label: "Support",
    title: "Great Support",
    description:
      "Our dedicated support team is available around the clock to assist with any questions or issues — real humans, real fast responses.",
    accent: "bg-green-50 border-green-200",
  },
];

export default function Discovered() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid — consistent with rest of page */}
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
            Why ExpenseHub
          </span>

          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Discover the Power of{" "}
            <span className="text-green-500">ExpenseHub</span>
          </h2>

          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            A budgeting application built like enterprise finance management
            software — powerful enough for large teams, simple enough for everyone.
          </p>
        </div>

        {/* ── Feature grid ── */}
        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.slice(0, 3).map(({ key, label, title, description }) => (
            <FeatureCard
              key={key}
              imgKey={key}
              info={info}
              label={label}
              title={title}
              description={description}
            />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {features.slice(3).map(({ key, label, title, description }) => (
            <FeatureCard
              key={key}
              imgKey={key}
              info={info}
              label={label}
              title={title}
              description={description}
            />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl border border-green-100 bg-green-50 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-bold text-gray-800">
              Ready to simplify expense management?
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Join 500+ businesses already saving time and money.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/signup"
              className="rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-green-200 transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-md hover:shadow-green-300"
            >
              Get started free →
            </a>
            <a
              href="/demo"
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-bold text-gray-700 shadow-sm transition-all duration-200 hover:border-green-300 hover:text-green-600"
            >
              Watch demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Reusable Feature Card ── */
function FeatureCard({
  imgKey,
  info,
  label,
  title,
  description,
}: {
  imgKey: DiscoveredKey;
  info: Record<DiscoveredKey, StaticImageData>;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-green-200 hover:shadow-lg hover:shadow-green-100">

      {/* Top accent line — slides in on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-green-400 to-green-500 transition-transform duration-300 group-hover:scale-x-100" />

      {/* Image area */}
      <div className="flex h-44 w-full items-center justify-center overflow-hidden bg-green-50 px-6 sm:h-48">
        <Image
          src={info[imgKey]}
          alt={title}
          className="h-full w-auto max-h-36 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        {/* Label pill */}
        <span className="w-fit rounded-full border border-green-100 bg-green-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-700">
          {label}
        </span>

        {/* Title */}
        <h3 className="text-base font-extrabold leading-tight text-gray-900 transition-colors group-hover:text-green-700 sm:text-lg">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
          {description}
        </p>

        {/* Learn more link */}
        <div className="mt-auto pt-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 opacity-0 transition-all duration-200 group-hover:opacity-100">
            Learn more
            <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}