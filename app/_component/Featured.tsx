"use client";

import fazier from "@/public/launch_badges.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import aitool from "@/public/featured-badge.svg";
import twelvetool from "@/public/badge1-white.svg";
import similarlabs from "@/public/similarlabs-embed-badge-light.svg";
import topfreeaitools from "@/public/badge black.png";
import startupfa from "@/public/default.png";
import turbo0 from "@/public/badge-listed-light.svg";
import ontoplist from "@/public/ontoplist30.png";
import indie from "@/public/logo_badge.png";
import sourceforge from "@/public/heart-badge-white.svg";
import budgetsample from "@/public/Badge Sample.jpg";

// Client logos
import sa    from "@/public/sa.png";
import sri   from "@/public/sri-removebg-preview.png";
import ayug  from "@/public/image.png";
import campa from "@/public/campa.png";

type Demo =
  | "fazier" | "aitool" | "twelvetool" | "similarlabs"
  | "topfreeaitools" | "startupfa" | "turbo0" | "ontoplist"
  | "indie" | "sourceforge" | "budgetsample";

const display: Record<Demo, StaticImageData> = {
  fazier, aitool, twelvetool, similarlabs,
  topfreeaitools, startupfa, turbo0, ontoplist,
  indie, sourceforge, budgetsample,
};

const platforms: { key: Demo; link: string; label: string }[] = [
  { key: "fazier",         link: "https://fazier.com/",                                        label: "Fazier" },
  { key: "aitool",         link: "https://aitools.inc/tools/expensehub?toolVerificationChallenge=aaad259f-1938-48ca-96b9-914be6fb48b5", label: "AI Tools Inc" },
  { key: "twelvetool",     link: "https://twelve.tools/",                                      label: "Twelve Tools" },
  { key: "similarlabs",    link: "https://similarlabs.com/?ref=embed",                         label: "Similar Labs" },
  { key: "topfreeaitools", link: "https://topfreeaitools.com/ai/expense-hub",                  label: "Top Free AI Tools" },
  { key: "startupfa",      link: "https://startupfa.me/s/expensehub?utm_source=expensehub.io", label: "Startup FA" },
  { key: "turbo0",         link: "https://turbo0.com/item/expense-hub",                        label: "Turbo0" },
  { key: "ontoplist",      link: "https://www.ontoplist.com/internet-webdirectory/software/",  label: "OnTopList" },
  { key: "indie",          link: "https://indie.deals/?ref=https%3A%2F%2Fexpensehub.io%2F/",  label: "Indie Deals" },
  { key: "sourceforge",    link: "https://sourceforge.net/software/product/ExpenseHub/",       label: "SourceForge" },
  { key: "budgetsample",   link: "/",                                                           label: "Budget Sample" },
];

const clients: { name: string; sector: string; img: StaticImageData }[] = [
  { name: "SA Cricket",             sector: "Sports",          img: sa    },
  { name: "SRI Realtors",           sector: "Real Estate",     img: sri   },
  { name: "Ayug Enterprise",        sector: "Enterprise",      img: ayug  },
  { name: "Campa Cola",             sector: "FMCG",            img: campa },
  { name: "Golden",                 sector: "Finance",         img: campa },
  { name: "Ocean Infrastructure",   sector: "Infrastructure",  img: ayug  },
  { name: "The Unbalance",          sector: "Media",           img: sa    },
  { name: "Ayyeah.com",             sector: "Tech",            img: sri   },
  { name: "Assurexx IT Services",   sector: "IT Services",     img: ayug  },
  { name: "Dubai Perfumes & Oud",   sector: "Retail",          img: campa },
  { name: "Nigeria Transportation", sector: "Government",      img: sa    },
  { name: "Savills Infra UK",       sector: "Real Estate",     img: sri   },
  { name: "Knight Franc London",    sector: "Finance",         img: ayug  },
];

const marqueeItems = [...platforms, ...platforms];

export default function Featured() {
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

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ══ SECTION 1: FEATURED ON ══ */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            As Featured On
          </span>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Featured On{" "}
            <span className="text-green-500">Leading Platforms</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Recognized and trusted by the best in tech and startup communities worldwide.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative mb-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24" />
          <div className="marquee-track flex w-max items-center gap-3">
            {marqueeItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-28 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-green-200 hover:shadow-md hover:shadow-green-100"
                style={{ minWidth: "140px" }}
              >
                <Image
                  src={display[item.key]}
                  alt={item.label}
                  className="h-9 w-auto max-w-[140px] object-contain grayscale opacity-50 transition-all duration-300 grayscale-0 opacity-100"
                />
                <span className="text-[11px] font-semibold text-gray-400 transition-colors group-hover:text-green-600">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* ══ DIVIDER ══ */}
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-100" />
          <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
            Our Clients
          </span>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* ══ SECTION 2: PROUD TO BE USED BY ══ */}

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Proud to be Used By
          </span>
          <h2 className="mb-3 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted Across{" "}
            <span className="text-green-500">Industries</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            Leading the way in Expense Management for small to large enterprises —
            real estate, hospitality, telecom and government.
          </p>
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {clients.map(({ name, sector, img }) => (
            <div
              key={name}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gray-100 bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-green-300 hover:shadow-lg hover:shadow-green-100"
            >
              {/* Top green accent bar — slides in on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 scale-x-0 bg-gradient-to-r from-green-400 to-green-500 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Logo */}
              <div className="flex h-16 w-full items-center justify-center rounded-xl bg-gray-50 px-3 transition-colors duration-200 group-hover:bg-green-50">
                <Image
                  src={img}
                  alt={name}
                  className="h-10 w-auto max-w-[90px] object-contain opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <span className="text-center text-xs font-bold leading-snug text-gray-700 transition-colors duration-200 group-hover:text-green-700">
                {name}
              </span>

              {/* Sector pill */}
              <span className="rounded-full border border-green-100 bg-green-50 px-3 py-0.5 text-[10px] font-semibold text-green-700 transition-colors duration-200 group-hover:border-green-300 group-hover:bg-green-100">
                {sector}
              </span>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}