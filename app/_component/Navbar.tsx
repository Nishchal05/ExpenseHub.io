"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "@/public/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Expense Reporting", href: "/reporting" },
  { label: "Mileage Tracking", href: "/mileage" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

        :root {
          --eh-green:  #2aad5e;
          --eh-green-dark: #1f9050;
          --eh-blue:   #2563c7;
          --eh-blue-dark: #1a4fa0;
          --eh-gold:   #c9900c;
          --eh-black:  #111111;
          --eh-glass:  rgba(255,255,255,0.82);
          --eh-border: rgba(37,99,199,0.15);
          --eh-shadow: 0 8px 40px rgba(0,0,0,0.09);
        }

        .eh-pill {
          background: var(--eh-glass);
          border: 1.5px solid var(--eh-border);
          box-shadow: var(--eh-shadow);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: background 0.3s, box-shadow 0.3s, border-color 0.3s;
        }
        .eh-pill.scrolled {
          background: rgba(255,255,255,0.97);
          box-shadow: 0 4px 28px rgba(0,0,0,0.11);
          border-color: rgba(37,99,199,0.24);
        }

        .eh-link {
          position: relative;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #1a1a1a;
          text-decoration: none;
          padding-bottom: 3px;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .eh-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, var(--eh-blue), var(--eh-green));
          border-radius: 2px;
          transition: width 0.25s cubic-bezier(.4,0,.2,1);
        }
        .eh-link:hover { color: var(--eh-blue); }
        .eh-link:hover::after { width: 100%; }

        .btn-login {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #1a1a1a;
          padding: 0.48rem 1.15rem;
          border-radius: 999px;
          border: 1.5px solid rgba(0,0,0,0.15);
          background: transparent;
          text-decoration: none;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .btn-login:hover {
          border-color: var(--eh-blue);
          color: var(--eh-blue);
          background: rgba(37,99,199,0.05);
        }

        .btn-signup {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #fff;
          background: linear-gradient(135deg, var(--eh-blue) 0%, var(--eh-green) 100%);
          padding: 0.52rem 1.4rem;
          border-radius: 999px;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 2px 14px rgba(37,99,199,0.3);
          transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
          display: inline-block;
        }
        .btn-signup:hover {
          transform: translateY(-1px) scale(1.03);
          box-shadow: 0 6px 22px rgba(37,99,199,0.38);
          filter: brightness(1.07);
        }

        /* Hamburger */
        .eh-burger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 38px; height: 38px;
          border-radius: 10px;
          border: 1.5px solid rgba(37,99,199,0.2);
          background: rgba(255,255,255,0.7);
          cursor: pointer;
          transition: background 0.2s;
          padding: 0;
        }
        .eh-burger:hover { background: rgba(37,99,199,0.07); }
        .eh-burger span {
          display: block;
          height: 2px;
          border-radius: 2px;
          background: #1a1a1a;
          transition: transform 0.3s, opacity 0.25s, width 0.25s;
        }
        .eh-burger span:nth-child(1) { width: 18px; }
        .eh-burger span:nth-child(2) { width: 13px; }
        .eh-burger span:nth-child(3) { width: 18px; }
        .eh-burger.open span:nth-child(1) { width: 18px; transform: translateY(7px) rotate(45deg); }
        .eh-burger.open span:nth-child(2) { opacity: 0; width: 0; }
        .eh-burger.open span:nth-child(3) { width: 18px; transform: translateY(-7px) rotate(-45deg); }

        /* Backdrop */
        .eh-backdrop {
          position: fixed; inset: 0; z-index: 45;
          background: rgba(10,10,10,0.22);
          backdrop-filter: blur(3px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        .eh-backdrop.open { opacity: 1; pointer-events: auto; }

        /* Drawer */
        .eh-drawer {
          position: fixed;
          top: 0; right: 0;
          width: min(300px, 84vw);
          height: 100%;
          z-index: 46;
          background: #fff;
          box-shadow: -12px 0 48px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(.4,0,.2,1);
        }
        .eh-drawer.open { transform: translateX(0); }

        .drawer-accent {
          height: 4px;
          background: linear-gradient(90deg, var(--eh-blue) 0%, var(--eh-green) 55%, var(--eh-gold) 100%);
          flex-shrink: 0;
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px 16px;
          border-bottom: 1px solid rgba(0,0,0,0.07);
          flex-shrink: 0;
        }

        .drawer-body {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }

        .drawer-nav-link {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: #1a1a1a;
          text-decoration: none;
          padding: 13px 20px;
          border-left: 3px solid transparent;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .drawer-nav-link:hover {
          background: rgba(37,99,199,0.05);
          border-left-color: var(--eh-blue);
          color: var(--eh-blue);
        }

        .drawer-footer {
          padding: 14px 20px 26px;
          border-top: 1px solid rgba(0,0,0,0.07);
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-shrink: 0;
        }
        .drawer-login {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.93rem;
          color: #1a1a1a;
          text-align: center;
          padding: 0.65rem;
          border-radius: 999px;
          border: 1.5px solid rgba(0,0,0,0.15);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .drawer-login:hover { border-color: var(--eh-blue); color: var(--eh-blue); }
        .drawer-signup {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.93rem;
          color: #fff;
          text-align: center;
          padding: 0.72rem;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--eh-blue) 0%, var(--eh-green) 100%);
          text-decoration: none;
          box-shadow: 0 2px 14px rgba(37,99,199,0.25);
          transition: filter 0.2s;
        }
        .drawer-signup:hover { filter: brightness(1.07); }
      `}</style>

      {/* ── Navbar ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0,
        width: "100%", zIndex: 50,
        padding: "0 16px",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", paddingTop: "12px" }}>
          <div
            className={`eh-pill${scrolled ? " scrolled" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "66px",
              borderRadius: "20px",
              padding: "0 20px",
              gap: "12px",
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <Image
                src={logo}
                alt="ExpenseHub"
                height={45}
                style={{ width: "auto", height: "70px", objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Desktop nav links */}
            {!isMobile && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                flex: 1,
                justifyContent: "center",
              }}>
                {NAV_LINKS.map((link) => (
                  <Link key={link.label} href={link.href} className="eh-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Desktop CTAs */}
            {!isMobile && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <Link href="/login" className="btn-login">Login</Link>
                <Link href="/signup" className="btn-signup">Get Started →</Link>
              </div>
            )}

            {/* Hamburger */}
            {isMobile && (
              <button
                className={`eh-burger${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle navigation menu"
              >
                <span />
                <span />
                <span />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`eh-backdrop${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`eh-drawer${menuOpen ? " open" : ""}`} aria-label="Navigation menu">
        {/* Brand color strip */}
        <div className="drawer-accent" />

        {/* Header */}
        <div className="drawer-header">
          <Image
            src={logo}
            alt="ExpenseHub"
            height={34}
            style={{ width: "auto", height: "34px", objectFit: "contain" }}
          />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#555", padding: "4px", borderRadius: "8px",
              display: "flex", alignItems: "center",
              transition: "color 0.2s",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

      
        <nav className="drawer-body">
  {NAV_LINKS.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      className="drawer-nav-link"
      onClick={() => setMenuOpen(false)}
    >
      {link.label}
    </Link>
  ))}
</nav>

        {/* CTAs */}
        <div className="drawer-footer">
          <Link href="/login" className="drawer-login" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
          <Link href="/signup" className="drawer-signup" onClick={() => setMenuOpen(false)}>
            Get Started →
          </Link>
        </div>
      </aside>
    </>
  );
}