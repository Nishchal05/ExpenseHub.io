"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --green:      #2aad5e;
          --green-dark: #1f9050;
          --blue:       #2563c7;
          --blue-dark:  #1a4fa0;
          --gold:       #c9900c;
          --black:      #0f0f0f;
          --gray:       #5a6070;
        }

        /* ── page bg ── */
        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        /* soft decorative blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-blob-1 {
          width: 520px; height: 520px;
          background: rgba(37,99,199,0.08);
          top: -120px; left: -160px;
        }
        .hero-blob-2 {
          width: 400px; height: 400px;
          background: rgba(42,173,94,0.08);
          bottom: -80px; right: -100px;
        }
        .hero-blob-3 {
          width: 260px; height: 260px;
          background: rgba(201,144,12,0.06);
          top: 40%; right: 12%;
        }

        /* ── grid ── */
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          min-height: 100vh;
          max-width: 1180px;
          margin: 0 auto;
          padding: 120px 32px 80px;
          gap: 56px;
        }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr;
            padding: 110px 24px 60px;
            gap: 40px;
            text-align: center;
          }
        }

        /* ── LEFT ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Trial badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(42,173,94,0.09);
          border: 1px solid rgba(42,173,94,0.28);
          border-radius: 999px;
          padding: 6px 14px 6px 8px;
          width: fit-content;
          animation: fadeSlideDown 0.5s ease both;
        }
        @media (max-width: 860px) { .hero-badge { margin: 0 auto; } }

        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 3px rgba(42,173,94,0.2);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(42,173,94,0.2); }
          50%      { box-shadow: 0 0 0 6px rgba(42,173,94,0.08); }
        }

        .badge-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--green-dark);
          letter-spacing: 0.02em;
        }
        .badge-sep {
          width: 1px; height: 12px;
          background: rgba(42,173,94,0.3);
        }
        .badge-sub {
          font-size: 0.78rem;
          font-weight: 500;
          color: #666;
        }

        /* Headline */
        .hero-h1 {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 4.5vw, 3.6rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--black);
          animation: fadeSlideDown 0.55s 0.1s ease both;
        }
        .hero-h1 .hl-green { color: var(--green); }
        .hero-h1 .hl-blue  { color: var(--blue); }

        /* Sub */
        .hero-sub {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--gray);
          max-width: 480px;
          animation: fadeSlideDown 0.55s 0.2s ease both;
        }
        @media (max-width: 860px) { .hero-sub { margin: 0 auto; } }

        /* CTA row */
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          animation: fadeSlideDown 0.55s 0.3s ease both;
        }
        @media (max-width: 860px) { .hero-ctas { justify-content: center; } }

        .cta-primary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          background: linear-gradient(135deg, var(--blue) 0%, var(--green) 100%);
          padding: 0.75rem 1.75rem;
          border-radius: 999px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(37,99,199,0.3);
          transition: transform 0.18s, box-shadow 0.18s, filter 0.18s;
          display: inline-block;
          white-space: nowrap;
        }
        .cta-primary:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 28px rgba(37,99,199,0.38);
          filter: brightness(1.07);
        }

        .cta-secondary {
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--black);
          background: transparent;
          border: 1.5px solid rgba(0,0,0,0.16);
          padding: 0.72rem 1.5rem;
          border-radius: 999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .cta-secondary:hover {
          border-color: var(--blue);
          color: var(--blue);
          background: rgba(37,99,199,0.04);
        }
        .cta-play {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: var(--blue);
          display: inline-flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cta-play svg { margin-left: 1px; }

        /* Trust row */
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          animation: fadeSlideDown 0.55s 0.4s ease both;
        }
        @media (max-width: 860px) { .hero-trust { justify-content: center; } }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #666;
        }
        .trust-icon {
          width: 16px; height: 16px;
          color: var(--green);
          flex-shrink: 0;
        }
        .trust-divider {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #ccc;
        }

        /* ── RIGHT ── */
        .hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeSlideUp 0.6s 0.15s ease both;
        }

        /* glow ring behind image */
        .hero-glow {
          position: absolute;
          width: 420px; height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(42,173,94,0.12) 0%, rgba(37,99,199,0.07) 60%, transparent 100%);
          z-index: 0;
        }

        /* card frame */
        .hero-card {
          position: relative;
          z-index: 1;
          border: 1.5px solid rgba(37,99,199,0.12);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.09), 0 4px 16px rgba(37,99,199,0.07);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          max-width: 520px;
        }

        /* floating stat chips */
        .stat-chip {
          position: absolute;
          background: #fff;
          border-radius: 14px;
          padding: 10px 16px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.10);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 2;
          border: 1px solid rgba(0,0,0,0.06);
          animation: floatChip 4s ease-in-out infinite;
        }
        .stat-chip-1 { top: -18px; left: -20px; animation-delay: 0s; }
        .stat-chip-2 { bottom: -18px; right: -20px; animation-delay: 2s; }
        @media (max-width: 860px) {
          .stat-chip-1 { top: -14px; left: 8px; }
          .stat-chip-2 { bottom: -14px; right: 8px; }
        }
        @keyframes floatChip {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-6px); }
        }

        .chip-icon {
          width: 32px; height: 32px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .chip-val {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--black);
          line-height: 1;
        }
        .chip-lbl {
          font-size: 0.7rem;
          color: #888;
          font-weight: 500;
          margin-top: 1px;
        }

        /* ── Video ── */
        .hero-video-wrap {
          position: relative;
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          line-height: 0;
        }
        .hero-video-wrap video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 14px;
          object-fit: contain;
          max-height: 550px;
        }

        /* ── Animations ── */
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hero-root">
        {/* Background blobs */}
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />

        <div className="hero-grid">

          {/* ── LEFT ── */}
          <div className="hero-left">

            {/* Trial badge */}
            <div className="hero-badge">
              <span className="badge-dot" />
              <span className="badge-text">30 Days Free Trial</span>
              <span className="badge-sep" />
              <span className="badge-sub">No Credit Card Required</span>
            </div>

            {/* Headline */}
            <h1 className="hero-h1">
              Simplifying{" "}
              <span className="hl-blue">Employee</span>{" "}
              <span className="hl-green">Expense</span>{" "}
              Management
            </h1>

            {/* Sub */}
            <p className="hero-sub">
              Discover the best Expense Management Software for Businesses,
              designed to simplify every expense at your company — from
              receipts to reimbursements, all in one place.
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <Link href="/signup" className="cta-primary">
                Sign up for free →
              </Link>
              <Link href="/demo" className="cta-secondary">
                <span className="cta-play">
                  <svg width="8" height="10" viewBox="0 0 8 10" fill="white">
                    <path d="M1 1l6 4-6 4V1z" />
                  </svg>
                </span>
                Get a demo
              </Link>
            </div>

            {/* Trust signals */}
            <div className="hero-trust">
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6.5 11 3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No credit card
              </div>
              <span className="trust-divider" />
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6.5 11 3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Cancel anytime
              </div>
              <span className="trust-divider" />
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6.5 11 3 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Setup in minutes
              </div>
            </div>

          </div>

          {/* ── RIGHT ── */}
          <div className="hero-right">
            <div className="hero-glow" />

            {/* Floating stat chips */}
            <div className="stat-chip stat-chip-1">
              <div className="chip-icon" style={{ background: "rgba(42,173,94,0.12)" }}>💰</div>
              <div>
                <div className="chip-val">2.4x</div>
                <div className="chip-lbl">Faster reimbursements</div>
              </div>
            </div>

            <div className="stat-chip stat-chip-2">
              <div className="chip-icon" style={{ background: "rgba(37,99,199,0.10)" }}>📊</div>
              <div>
                <div className="chip-val">98%</div>
                <div className="chip-lbl">Accuracy rate</div>
              </div>
            </div>

            {/* Main card — Video */}
            <div className="hero-card">
              <div className="hero-video-wrap">
                <video
                  src="/herovideo1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}