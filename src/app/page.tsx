"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Spline from "@splinetool/react-spline";

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex size-5 items-center justify-center text-current">
      {children}
    </span>
  );
}

export default function Home() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".hero-nav", { y: -50, opacity: 0, duration: 0.8 })
        .from(
          ".hero-copy > *",
          { y: 36, opacity: 0, duration: 0.75, stagger: 0.15 },
          "-=0.35",
        )
        .from(
          ".hero-cta > *",
          {
            scale: 0.75,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        .from(
          "#hero-cube-container",
          { x: 60, opacity: 0, duration: 0.9, ease: "power2.out" },
          "-=0.7",
        );

      gsap.fromTo(
        ".right-glow",
        { opacity: 0.6 },
        {
          opacity: 1,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        },
      );

      gsap.to(".mouse-dot", {
        y: 12,
        duration: 1.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#FFFBEB]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(251,191,36,0.56) 0%, rgba(251,191,36,0.36) 22%, rgba(251,191,36,0.2) 42%, rgba(251,191,36,0.08) 58%, rgba(251,191,36,0) 76%)",
        }}
      />
      <div
        className="right-glow pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 100% 50%, rgba(251,191,36,0.74) 0%, rgba(251,191,36,0.4) 28%, rgba(251,191,36,0.17) 52%, rgba(251,191,36,0) 72%)",
          opacity: 0.6,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.24)_0%,transparent_42%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-325 flex-col px-5 pb-20 pt-5 sm:px-8 lg:px-12">
        <header className="hero-nav flex items-center justify-between rounded-2xl border border-black/10 bg-black/5 px-4 py-3 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full border border-black/30 bg-black/85 text-sm font-black tracking-wide text-orange-300">
              ZSL
            </div>
            <p className="text-base font-extrabold tracking-tight text-[#151515] sm:text-lg">
              Zwingli Savanarola Lubis
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Dark mode"
              className="rounded-lg border border-black/20 bg-white/65 p-2 text-[#151515] transition hover:bg-white"
            >
              <Icon>
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M21 13.02A9 9 0 1 1 10.98 3a7 7 0 1 0 10.02 10.02Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </Icon>
            </button>
            <button
              aria-label="Notifications"
              className="relative rounded-lg border border-black/20 bg-white/65 p-2 text-[#151515] transition hover:bg-white"
            >
              <span className="absolute -right-1 -top-1 rounded-full bg-[#202020] px-1.5 text-[10px] font-bold text-orange-200">
                3
              </span>
              <Icon>
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M14.8 18a3 3 0 0 1-5.6 0M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
            </button>
            <button
              aria-label="Stars"
              className="flex items-center gap-1 rounded-lg border border-black/20 bg-white/65 px-2.5 py-2 text-sm font-bold text-[#151515] transition hover:bg-white"
            >
              <Icon>
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="m12 3 2.9 5.87 6.48.94-4.69 4.57 1.11 6.46L12 17.77l-5.8 3.05 1.11-6.46-4.69-4.57 6.48-.94L12 3Z"
                    fill="currentColor"
                  />
                </svg>
              </Icon>
              986
            </button>
            <button
              aria-label="Menu"
              className="flex items-center gap-2 rounded-lg border border-black/20 bg-white/65 px-3 py-2 text-sm font-bold text-[#151515] transition hover:bg-white"
            >
              Menu
              <Icon>
                <svg viewBox="0 0 24 24" fill="none" className="size-5">
                  <path
                    d="M3 6h18M3 12h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </Icon>
            </button>
          </div>
        </header>

        <main className="grid flex-1 grid-cols-1 items-center gap-10 py-8 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <div className="hero-copy max-w-xl space-y-4 text-[#121212]">
            <p className="text-2xl font-semibold tracking-tight text-black/75">Hi, I am</p>
            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight text-[#0c0c0c] sm:text-7xl lg:text-8xl">
              Zwingli Savanarola
            </h1>
            <p className="text-xl font-semibold text-black/80 sm:text-2xl">
              A Full Stack Web Developer
            </p>

            <div className="hero-cta space-y-4 pt-5">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl border border-black/25 bg-[#141414] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-[#ffd469] transition hover:-translate-y-0.5 hover:bg-black"
              >
                <Icon>
                  <svg viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </Icon>
                Resume
              </a>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#"
                  className="rounded-lg border border-black/30 bg-white/50 px-4 py-2 text-sm font-bold text-black transition hover:bg-white/70"
                >
                  Hire Me
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="rounded-lg border border-black/30 bg-white/45 p-2.5 text-black transition hover:bg-white/70"
                >
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none" className="size-5">
                      <path
                        d="M4 4 20 20M20 4 4 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Icon>
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="rounded-lg border border-black/30 bg-white/45 p-2.5 text-black transition hover:bg-white/70"
                >
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none" className="size-5">
                      <path
                        d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.21.68-.48v-1.85c-2.78.6-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.91.82.1-.66.35-1.08.64-1.33-2.22-.25-4.56-1.1-4.56-4.91 0-1.08.39-1.96 1.03-2.65-.1-.26-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02a9.7 9.7 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.41.1 2.67.64.69 1.03 1.57 1.03 2.65 0 3.82-2.34 4.66-4.57 4.9.36.31.68.9.68 1.8v2.67c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Icon>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="rounded-lg border border-black/30 bg-white/45 p-2.5 text-black transition hover:bg-white/70"
                >
                  <Icon>
                    <svg viewBox="0 0 24 24" fill="none" className="size-5">
                      <path
                        d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.39 1.56 1.56 0 0 1 6.94 8.5ZM5.6 10.1h2.7V19H5.6v-8.9ZM10 10.1h2.58v1.22h.04c.36-.68 1.24-1.4 2.56-1.4 2.73 0 3.23 1.8 3.23 4.14V19h-2.7v-4.35c0-1.04-.02-2.37-1.44-2.37-1.45 0-1.67 1.13-1.67 2.3V19H10v-8.9Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Icon>
                </a>
              </div>
            </div>
          </div>

          <div
  id="hero-cube-container"
  // We removed the bg, border, rounded corners, and backdrop-blur. 
  // Now it's just an invisible bounding box!
  className="relative flex h-full min-h-125 w-full items-center justify-center overflow-hidden"
>
  {/* The Oversized Absolute Box (Watermark Killer) */}
  <div className="absolute -bottom-16 -left-16 -right-16 -top-16">
    <Spline
      scene="https://prod.spline.design/u94Yadrq5qprTstw/scene.splinecode"
      className="h-full w-full"
    />
  </div>
</div>
        </main>

        <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-black/70">
            <div className="relative h-11 w-7 rounded-full border-2 border-black/40 bg-white/20">
              <span className="mouse-dot absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-black/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
