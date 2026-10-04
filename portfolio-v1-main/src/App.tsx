import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";

import favicon from "/favicon.ico";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import ContactSection from "@/components/ContactSection";
import About from "./pages/About";

const techWords = [
  "SOFTWARE ENGINEER",
  "FULL-STACK DEVELOPMENT",
  "WEB APPLICATIONS",
  "DIGITAL SOLUTIONS",
  "Q-S STUDIO",
];

const marqueeItems = [
  "REACT",
  "NODE.JS",
  "JAVA",
  "SPRING BOOT",
  "TYPESCRIPT",
  "MYSQL",
  "MONGODB",
  "REST API",
  "FULL-STACK",
  "SOFTWARE ENGINEERING",
];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [colorMode, setColorMode] = useState(0);

  const brandText = "Q-S STUDIO";

  const colors = [
    "bg-gradient-to-b from-white via-white/80 to-[#d4af37] text-transparent bg-clip-text",
    "text-white",
    "bg-gradient-to-b from-[#d4af37] via-white to-white/70 text-transparent bg-clip-text",
  ];

  /* =========================================================
     WELCOME SCREEN TIMER
  ========================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 6500);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================================
     BODY SCROLL CONTROL
  ========================================================= */

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, mobileMenu]);

  /* =========================================================
     LIVE TIME
  ========================================================= */

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  /* =========================================================
     BRAND TYPING ANIMATION
  ========================================================= */

  useEffect(() => {
    setDisplayed("");

    let i = 0;

    const type = () => {
      setDisplayed(brandText.slice(0, i + 1));

      i++;

      if (i < brandText.length) {
        setTimeout(type, 130);
      }
    };

    type();
  }, []);

  /* =========================================================
     SCROLL FUNCTION
  ========================================================= */

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileMenu(false);
  };

  return (
    <Routes>
      {/* =====================================================
          HOME
      ====================================================== */}

      <Route
        path="/"
        element={
          <div className="min-h-screen overflow-x-hidden bg-[#05070a] text-white">
            {/* =================================================
                WELCOME SCREEN
            ================================================== */}

            <AnimatePresence>
              {showWelcome && <WelcomeScreen />}
            </AnimatePresence>

            {/* =================================================
                NAVBAR
            ================================================== */}

            <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#05070a]/60 px-5 py-4 backdrop-blur-2xl md:px-10 md:py-5">
              <div className="mx-auto flex max-w-[1600px] items-center justify-between">
                {/* BRAND */}

                <button
                  onClick={() => scrollToSection("Home")}
                  className="group flex items-center gap-3"
                >
                  <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-[#d4af37]/30 bg-white/[0.03]">
                    <img
                      src={favicon}
                      alt="Q-S Studio"
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-[#d4af37]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-col items-start">
                    <span className="text-[11px] font-bold tracking-[0.28em] text-white md:text-xs">
                      Q-S STUDIO
                    </span>

                    <span className="text-[7px] uppercase tracking-[0.25em] text-[#d4af37]/70">
                      Software Engineering
                    </span>
                  </div>
                </button>

                {/* DESKTOP NAV */}

                <ul className="hidden items-center gap-9 text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 md:flex">
                  <li>
                    <button
                      onClick={() => scrollToSection("Home")}
                      className="relative transition-colors hover:text-white"
                    >
                      Home
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="relative transition-colors hover:text-white"
                    >
                      About
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="relative transition-colors hover:text-white"
                    >
                      Contact
                    </button>
                  </li>
                </ul>

                {/* DESKTOP TIME */}

                <div className="hidden items-center gap-3 md:flex">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d4af37]" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                    {time}
                  </span>
                </div>

                {/* MOBILE MENU */}

                <button
                  onClick={() => setMobileMenu(!mobileMenu)}
                  className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-[#d4af37]/40"
                  aria-label="Toggle menu"
                >
                  {mobileMenu ? (
                    <X size={20} />
                  ) : (
                    <Menu size={20} />
                  )}
                </button>
              </div>
            </nav>

            {/* =================================================
                MOBILE MENU
            ================================================== */}

            <AnimatePresence>
              {mobileMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#05070a]/98 backdrop-blur-2xl md:hidden"
                >
                  {/* Background glow */}

                  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/5 blur-[100px]" />

                  {/* Time */}

                  <div className="absolute top-28 text-center">
                    <p className="mb-2 text-[8px] uppercase tracking-[0.35em] text-white/30">
                      Current Time
                    </p>

                    <p className="font-mono text-xl tracking-widest text-white/70">
                      {time}
                    </p>
                  </div>

                  {/* Menu */}

                  <div className="relative flex flex-col items-center gap-9">
                    {["Home", "About", "Contact"].map((item) => (
                      <button
                        key={item}
                        onClick={() =>
                          scrollToSection(
                            item === "Home"
                              ? "Home"
                              : item.toLowerCase(),
                          )
                        }
                        className="group flex items-center gap-3 text-2xl font-bold uppercase tracking-[0.15em] text-white/70 transition-colors hover:text-white"
                      >
                        <span>{item}</span>

                        <ArrowUpRight
                          size={18}
                          className="text-[#d4af37] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Bottom brand */}

                  <div className="absolute bottom-10 text-center">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-white/20">
                      Q-S Studio
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* =================================================
                HERO
            ================================================== */}

        <section
  id="Home"
  className="relative min-h-screen w-full overflow-hidden bg-[#05070a]"
>
  {/* =====================================================
      BACKGROUND
  ====================================================== */}

  <div className="pointer-events-none absolute inset-0">

    {/* Main gold glow */}
    <div className="absolute left-[45%] top-[20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/[0.07] blur-[160px]" />

    {/* Small right glow */}
    <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[140px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#05070a_88%)]" />
  </div>


  {/* =====================================================
      HERO CONTENT
  ====================================================== */}

  <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pb-8 pt-28 md:px-10 md:pb-10 md:pt-32">


    {/* =================================================
        TOP INFORMATION
    ================================================== */}

    <div className="flex items-center justify-between">

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 6.6, duration: 0.8 }}
        className="flex items-center gap-3"
      >
        <span className="h-px w-7 bg-[#d4af37]" />

        <span className="text-[9px] uppercase tracking-[0.32em] text-white/40 md:text-[10px]">
          Digital Engineering Studio
        </span>
      </motion.div>


      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.8, duration: 0.8 }}
        className="hidden text-[9px] tracking-[0.3em] text-white/25 md:block"
      >
        01 / 01
      </motion.span>

    </div>


    {/* =================================================
        MAIN HERO AREA
    ================================================== */}

    <div className="relative flex flex-1 flex-col justify-center">


      {/* Small welcome label */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 6.9,
          duration: 0.8,
        }}
        className="mb-6"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#d4af37]">
          Welcome to Q-S Studio
        </span>
      </motion.div>


      {/* =================================================
          MAIN BRAND
      ================================================== */}

      <div className="relative">

        <motion.h1
          onClick={() =>
            setColorMode(
              (prev) => (prev + 1) % colors.length
            )
          }
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 7,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            cursor-pointer
            select-none
            text-[15vw]
            font-black
            uppercase
            leading-[0.75]
            tracking-[-0.075em]
            transition-all
            duration-500

            sm:text-[17vw]
            md:text-[15vw]
            lg:text-[13vw]
            xl:text-[8rem]

            ${colors[colorMode]}
          `}
        >
          {displayed || "\u00A0"}
        </motion.h1>


        {/* Decorative line */}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "22%" }}
          transition={{
            delay: 7.9,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 h-[2px] bg-[#d4af37]"
        />

      </div>


      {/* =================================================
          RIGHT CONTENT
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 60,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 7.5,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-10
          max-w-[420px]

          md:absolute
          md:right-0
          md:top-[38%]
          md:mt-0
        "
      >

        {/* Label */}

        <div className="mb-4 flex items-center gap-3">

          <span className="h-px w-10 bg-[#d4af37]" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-white/35">
            What We Build
          </span>

        </div>


        {/* Heading */}

        <h2 className="text-[clamp(40px,5vw,72px)] font-black leading-[0.9] tracking-[-0.055em]">

          <span className="text-white">
            Digital
          </span>

          <br />

          <span className="text-[#d4af37]">
            Products.
          </span>

        </h2>


        {/* Description */}

        <p className="mt-6 max-w-[390px] text-sm leading-6 text-white/40 md:text-[15px]">
          Modern websites and web applications engineered with
          clean code, thoughtful design, and powerful technology.
        </p>


        {/* Mini stack */}

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">

          {[
            "React",
            "Node.js",
            "Java",
            "Spring Boot",
            "MySQL",
          ].map((item) => (
            <span
              key={item}
              className="text-[8px] uppercase tracking-[0.2em] text-white/25"
            >
              {item}
            </span>
          ))}

        </div>

      </motion.div>

    </div>


    {/* =================================================
        BOTTOM CONTENT
    ================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 8,
        duration: 0.9,
      }}
      className="
        flex
        flex-col
        gap-7

        md:flex-row
        md:items-end
        md:justify-between
      "
    >

      {/* Left text */}

      <div className="max-w-[600px]">

        <p className="text-sm leading-6 text-white/40 md:text-base">

          Turning ideas into{" "}

          <span className="text-white/80">
            scalable digital experiences
          </span>{" "}

          for businesses, brands, and modern products.

        </p>


        {/* Categories */}

        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">

          {[
            "Software Engineering",
            "Full-Stack Development",
            "Web Applications",
            "Digital Solutions",
          ].map((item) => (
            <span
              key={item}
              className="text-[8px] uppercase tracking-[0.22em] text-white/25 md:text-[9px]"
            >
              {item}
            </span>
          ))}

        </div>

      </div>


      {/* CTA */}

      <button
        onClick={() => scrollToSection("contact")}
        className="
          group
          flex
          w-fit
          items-center
          gap-4
          rounded-full
          border
          border-[#d4af37]/40
          bg-[#d4af37]/[0.04]
          px-6
          py-3.5
          text-[9px]
          font-medium
          uppercase
          tracking-[0.28em]
          text-white/80
          transition-all
          duration-300
          hover:border-[#d4af37]
          hover:bg-[#d4af37]/10
          hover:text-white
        "
      >

        Start a Project

        <ArrowUpRight
          size={15}
          className="
            text-[#d4af37]
            transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />

      </button>

    </motion.div>

  </div>
</section>
            {/* =================================================
                TECH MARQUEE
            ================================================== */}

            <div className="overflow-hidden border-y border-white/[0.07] bg-[#07090d] py-5">
              <div className="flex w-max animate-marquee whitespace-nowrap">
                {[...marqueeItems, ...marqueeItems].map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="mx-8 flex items-center gap-8"
                    >
                      <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/30 md:text-[10px]">
                        {item}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-[#d4af37]/50" />
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* =================================================
                ABOUT / SOFTWARE ENGINEER SECTION
            ================================================== */}

            <section id="about">
              <FrontendDeveloperSection />
            </section>

            {/* =================================================
                CONTACT
            ================================================== */}

            <section id="contact">
              <ContactSection />
            </section>

            {/* =================================================
                MARQUEE CSS
            ================================================== */}

            <style>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }

                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-marquee {
                animation: marquee 25s linear infinite;
              }
            `}</style>
          </div>
        }
      />

      {/* =====================================================
          ABOUT PAGE
      ====================================================== */}

      <Route path="/about" element={<About />} />
    </Routes>
  );
}