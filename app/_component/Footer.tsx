"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo2.jpg";
import { useState } from "react";

const resources = [
  { label: "Blogs", href: "/blogs" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const useCases = [
  { label: "Expense Tracking", href: "/use-cases/expense-tracking" },
  { label: "Mileage Tracking", href: "/use-cases/mileage-tracking" },
  { label: "Real Estate Expenses", href: "/use-cases/real-estate" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/supportexpense/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: "https://www.reddit.com/r/ExpenseHubBusiness/hot/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path
          d="M17.5 12a1.5 1.5 0 1 0-2.5-1.1A7.6 7.6 0 0 0 12 10.4a7.6 7.6 0 0 0-3-.7l.6-2.7 1.9.4a1.1 1.1 0 1 0 1-1 1.1 1.1 0 0 0-.9.5l-2.1-.5a.2.2 0 0 0-.2.1l-.7 3a7.6 7.6 0 0 0-3 .7A1.5 1.5 0 1 0 7 12a2.3 2.3 0 0 0 0 .4c0 2 2.2 3.6 5 3.6s5-1.6 5-3.6a2.3 2.3 0 0 0 0-.4zm-8 1a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5.5 2.6a3.8 3.8 0 0 1-3 .8 3.8 3.8 0 0 1-3-.8.2.2 0 0 1 .3-.3 3.4 3.4 0 0 0 2.7.6 3.4 3.4 0 0 0 2.7-.6.2.2 0 0 1 .3.3zm-.2-1.6a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/ExpenseHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/expense_hub/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,173,94,0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── Main footer body ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="ExpenseHub logo"
                width={140}
                height={40}
                className="h-auto w-36 object-contain"
              />
            </Link>
            <p className="text-sm font-semibold italic text-green-600">
              Smart, Simple, Done.
            </p>
            <p className="text-xs leading-relaxed text-gray-400">
              The only expense management platform built entirely on user
              feedback — no assumptions, just results.
            </p>
            {/* Green accent line */}
            <div className="h-1 w-10 rounded-full bg-green-400" />
          </div>

          {/* Col 2 — Resources */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Resources
            </p>
            <ul className="flex flex-col gap-2.5">
              {resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-150 hover:text-green-600"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-green-300 transition-colors group-hover:bg-green-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Use Cases */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Use Cases
            </p>
            <ul className="flex flex-col gap-2.5">
              {useCases.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-500 transition-colors duration-150 hover:text-green-600"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-green-300 transition-colors group-hover:bg-green-500" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Connect / Email */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Connect with Us Today
            </p>
            <p className="text-xs leading-relaxed text-gray-400">
              Have questions, need a demo, or just want to chat? Drop your email
              below and we'll get in touch soon!
            </p>

            {submitted ? (
              <div className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                We'll be in touch soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:gap-0">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full rounded-full border border-green-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-100 sm:rounded-r-none sm:rounded-l-full"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-green-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-green-600 sm:rounded-l-none sm:rounded-r-full"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="relative z-10 h-px w-full bg-green-100" />

      {/* ── Bottom bar ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ExpenseHub. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-1">
            <span className="mr-2 text-xs text-gray-400">Follow us:</span>
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-green-100 text-gray-400 transition-all duration-150 hover:border-green-400 hover:bg-green-50 hover:text-green-600"
              >
                {s.icon}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}