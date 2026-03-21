"use client";

import Home from "@/public/Home tab (1).png";
import Myexpense from "@/public/My Expense tab (1).png";
import Approval from "@/public/Finance Approval tab (2).png";
import Dashboard from "@/public/image (3).png";
import Report from "@/public/Report tab (1).png";
import Export from "@/public/Export Tab (1).png";
import Logo from "@/public/logo.png";
import Setting from "@/public/Setting Tab (1).png";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type DemoKey =
  | "Home"
  | "My Expense"
  | "Approval"
  | "Dashboard"
  | "Reports"
  | "Export"
  | "Settings";

const demoImages: Record<DemoKey, StaticImageData> = {
  Home,
  "My Expense": Myexpense,
  Approval,
  Dashboard,
  Reports: Report,
  Export,
  Settings: Setting,
};

const navItems: { key: DemoKey; icon: string; desc: string }[] = [
  { key: "Home",       icon: "🏠", desc: "Overview & summary" },
  { key: "My Expense", icon: "💳", desc: "Track your spending" },
  { key: "Approval",   icon: "✅", desc: "Finance approvals" },
  { key: "Dashboard",  icon: "📊", desc: "Analytics & insights" },
  { key: "Reports",    icon: "📋", desc: "Detailed reports" },
  { key: "Export",     icon: "📤", desc: "Download & share" },
  { key: "Settings",   icon: "⚙️", desc: "Configure preferences" },
];

export default function Demosection() {
  const [selected, setSelected] = useState<DemoKey>("Home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-4 sm:px-8 lg:px-12">

      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Interactive Demo
          </span>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Experience Real-Time{" "}
            <span className="text-green-500">Expense Management</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Explore real-time features through an interactive demo — tap any tab to preview.
          </p>
        </div>

        {/* ── Mobile: tab strip ── */}
        <div className="mb-4 lg:hidden">
          {/* Scrollable horizontal pill tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {navItems.map(({ key, icon }) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all
                  ${selected === key
                    ? "bg-green-500 text-white shadow-md shadow-green-200"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-green-300 hover:text-green-600"
                  }`}
              >
                <span>{icon}</span>
                <span>{key}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Main layout ── */}
        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[260px_1fr] lg:items-start lg:gap-5">

          {/* ── Sidebar (desktop only) ── */}
          <aside className="hidden h-full lg:flex lg:flex-col lg:sticky lg:top-24 lg:justify-evenly  rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden ">

            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-4">
              <Image src={Logo} alt="ExpenseHub" width={36} height={36} className="rounded-xl" />
              <span className="text-base font-extrabold tracking-tight text-gray-900">
                Expense<span className="text-green-500">Hub</span>
              </span>
            </div>

            {/* Nav items */}
            <div className="flex flex-col gap-1 p-3 flex-1">
              {navItems.map(({ key, icon, desc }) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200
                    ${selected === key
                      ? "bg-green-500 shadow-md shadow-green-200"
                      : "hover:bg-green-50"
                    }`}
                >
                  <span className="text-lg leading-none">{icon}</span>
                  <span className="flex min-w-0 flex-col">
                    <span className={`truncate text-sm font-semibold leading-tight ${selected === key ? "text-white" : "text-gray-800"}`}>
                      {key}
                    </span>
                    <span className={`truncate text-xs ${selected === key ? "text-green-100" : "text-gray-400"}`}>
                      {desc}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            {/* ── User profile + logout ── */}
            <div className="border-t border-gray-100 p-3">
              <div className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-gray-50 transition-colors">
                {/* Avatar */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white shadow-sm">
                  RD
                </div>
                {/* Info */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-semibold text-gray-900">Rachel Daniel</span>
                  <span className="truncate text-xs text-gray-400">Rachel@businessemail.com</span>
                </div>
                {/* Logout icon */}
                <button
                  className="ml-1 shrink-0 rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                  title="Logout"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                  </svg>
                </button>
              </div>
            </div>
          </aside>

          {/* ── Preview panel ── */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3">
              <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex flex-1 items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 sm:gap-2 sm:px-3">
                <span className="text-xs text-green-500">🔒</span>
                <span className="truncate text-xs text-gray-400">
                  app.expensehub.com/{selected.toLowerCase().replace(" ", "-")}
                </span>
              </div>
              <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">
                {selected}
              </span>
            </div>

            {/* Screenshot */}
            <div className="w-full bg-gray-50">
              <Image
                src={demoImages[selected]}
                alt={selected}
                priority
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-3 py-2 sm:px-4 sm:py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]" />
                <span className="text-xs font-medium text-gray-400">Live preview · {selected}</span>
              </div>
              <span className="text-xs text-gray-300">ExpenseHub © 2025</span>
            </div>

          </div>
        </div>

        {/* ── Mobile: User profile card (below preview) ── */}
        <div className="mt-4 lg:hidden">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-bold text-white shadow-sm">
              RD
            </div>
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-sm font-semibold text-gray-900">Rachel Daniel</span>
              <span className="truncate text-xs text-gray-400">Rachel@businessemail.com</span>
            </div>
            <button className="flex shrink-0 items-center gap-1.5 rounded-lg border border-red-100 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500 transition-colors hover:bg-red-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}