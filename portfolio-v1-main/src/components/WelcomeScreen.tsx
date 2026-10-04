import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";
import { useEffect } from "react";

export default function WelcomeScreen() {
  const icons = [Code2, Layers3, Rocket];

  useEffect(() => {
    // Disable page scrolling while welcome screen is visible
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scrolling after welcome screen disappears
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(8px)",
        transition: {
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#05070a] px-5"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Main glow */}
        <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#d4af37]/10 blur-[150px]" />

        {/* Bottom glow */}
        <div className="absolute bottom-[-180px] right-[-120px] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[130px]" />

        {/* Side glow */}
        <div className="absolute top-1/2 left-[-200px] -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#d4af37]/5 blur-[120px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#05070a_85%)]" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex w-full max-w-[520px] flex-col items-center text-center text-white"
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mb-8"
        >
          {/* Outer glow */}
          <motion.div
            animate={{
              opacity: [0.25, 0.5, 0.25],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-[-12px] rounded-2xl bg-[#d4af37]/20 blur-xl"
          />

          {/* Logo box */}
          <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-white/[0.035] backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.12)]">
            {/* Q */}
            <span className="absolute left-[19px] top-[16px] text-[31px] font-black tracking-tighter text-white">
              Q
            </span>

            {/* S */}
            <span className="absolute bottom-[10px] right-[15px] text-[31px] font-black tracking-tighter text-[#d4af37]">
              S
            </span>

            {/* Small line */}
            <div className="absolute bottom-[14px] left-[19px] h-[2px] w-[17px] bg-[#d4af37]" />
          </div>
        </motion.div>

        {/* =====================================================
            BRAND NAME
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.65,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-3"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="text-[clamp(28px,7vw,44px)] font-black tracking-[-0.04em]">
              Q-S
            </span>

            <span className="text-[clamp(28px,7vw,44px)] font-black tracking-[-0.04em] text-[#d4af37]">
              STUDIO
            </span>
          </div>
        </motion.div>

        {/* =====================================================
            TAGLINE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.95,
            duration: 0.8,
          }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-8 bg-[#d4af37]/60" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50 sm:text-xs">
            Software Engineering Studio
          </span>

          <div className="h-px w-8 bg-[#d4af37]/60" />
        </motion.div>

        {/* =====================================================
            ICONS
        ====================================================== */}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="mb-9 flex items-center justify-center gap-3"
        >
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.4,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.12,
                y: -4,
              }}
              className="group flex h-[48px] w-[48px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] backdrop-blur-md transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/5"
            >
              <Icon
                size={19}
                strokeWidth={1.7}
                className="text-white/70 transition-colors duration-300 group-hover:text-[#d4af37]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* =====================================================
            MAIN TITLE
        ====================================================== */}

        <div className="mb-5 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 65 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.35,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[clamp(29px,7vw,48px)] font-black leading-[1.05] tracking-[-0.04em]"
          >
            Engineering
            <br />

            <span className="text-[#d4af37]">
              Digital Experiences.
            </span>
          </motion.h1>
        </div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{
            delay: 1.7,
            duration: 0.9,
          }}
          className="max-w-[420px] text-sm leading-6 text-white/50 sm:text-[15px]"
        >
          Modern websites, powerful web applications, and digital
          solutions built with clean code, thoughtful design, and
          scalable technology.
        </motion.p>

        {/* =====================================================
            TECH TERMINAL BADGE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
          }}
          className="mt-8 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 backdrop-blur-xl"
        >
          <Terminal
            size={13}
            className="text-[#d4af37]"
          />

          <span className="font-mono text-[10px] tracking-[0.18em] text-white/50 sm:text-xs">
            BUILDING THE FUTURE
          </span>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-[#d4af37]"
          >
            _
          </motion.span>
        </motion.div>

        {/* =====================================================
            TECHNOLOGY LINE
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.35,
            duration: 0.8,
          }}
          className="mt-5 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:text-[10px]"
        >
          <Sparkles size={11} className="text-[#d4af37]/70" />

          <span>
            React • Node.js • Java • Spring Boot • Database
          </span>
        </motion.div>

        {/* =====================================================
            LOADING SECTION
        ====================================================== */}

        <div className="mt-11 w-full max-w-[310px]">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">
              Initializing
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
              className="font-mono text-[9px] tracking-[0.2em] text-[#d4af37]/70"
            >
              Q-S
            </motion.span>
          </div>

          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 6.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full bg-[#d4af37]"
            >
              {/* Loading glow */}
              <div className="absolute right-0 top-1/2 h-[6px] w-[35px] -translate-y-1/2 rounded-full bg-[#d4af37] blur-md" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="mt-3 flex items-center justify-center gap-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"
            />

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">
              Preparing your experience
            </span>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BRAND
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 1,
          }}
          className="mt-9 flex items-center gap-2"
        >
          <Code2
            size={12}
            className="text-[#d4af37]/60"
          />

          <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/25">
            Q-S Studio
          </span>

          <Rocket
            size={12}
            className="text-[#d4af37]/60"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}