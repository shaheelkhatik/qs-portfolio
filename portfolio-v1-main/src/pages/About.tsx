import { motion } from "framer-motion";
import { ArrowLeft, Code2, Palette, Smartphone, Rocket, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();

  const text = "About Q-S Studio";
  const [displayedText, setDisplayedText] = useState("");

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;
    let restartTimeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      setDisplayedText("");
      index = 0;

      interval = setInterval(() => {
        index++;

        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);

          restartTimeout = setTimeout(() => {
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">

      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />

        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />

      </div>

      {/* ================= BACK BUTTON ================= */}

      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />

        <span className="hidden sm:inline">
          Back
        </span>
      </motion.button>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8">


        {/* ================= BRAND SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >

          {/* Q-S STUDIO LOGO / BRAND */}

          <div
            className="
              w-[180px]
              h-[100px]
              sm:w-[220px]
              sm:h-[120px]
              rounded-2xl
              border
              border-white/15
              bg-white/[0.03]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              hover:border-white/30
              hover:bg-white/[0.06]
              transition-all
              duration-500
            "
          >

            <div className="text-center">

              <h2 className="text-3xl sm:text-4xl font-black tracking-[0.15em]">
                Q-S
              </h2>

              <p className="text-[9px] sm:text-[10px] tracking-[0.45em] text-white/40 mt-1">
                STUDIO
              </p>

            </div>

          </div>


          {/* DIVIDER */}

          <div
            className="
              mt-6
              h-[1px]
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              w-[90vw]
              sm:w-[400px]
              md:w-[500px]
            "
          />

        </motion.div>


        {/* ================= GLASS CONTAINER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-5xl
            h-[650px]
            sm:h-[700px]
            md:h-[720px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >

          {/* GLASS LIGHT EFFECT */}

          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />


          {/* ================= HEADER ================= */}

          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >

            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
                text-center
              "
            >

              {displayedText}

              <span className="animate-pulse ml-2">
                |
              </span>

            </h1>

          </div>


          {/* ================= SCROLLABLE CONTENT ================= */}

          <div
            className="
              relative
              z-10
              h-[calc(100%-100px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >

            <div
              className="
                text-white/70
                text-sm
                sm:text-base
                leading-8
                tracking-wide
                space-y-10
              "
            >


              {/* ================= INTRO ================= */}

              <section>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  We Build Digital Experiences
                </h2>

                <p>
                  <span className="text-white font-semibold">
                    Q-S Studio
                  </span>{" "}
                  is a modern web development studio focused on creating
                  professional, responsive, and user-friendly websites for
                  businesses, brands, startups, and individuals.
                </p>

                <p className="mt-4">
                  We believe a website is more than just a collection of
                  pages. It is the digital identity of a business. That's why
                  we focus on clean design, smooth user experience,
                  performance, responsiveness, and a strong visual identity.
                </p>

              </section>


              {/* ================= WHAT WE DO ================= */}

              <section>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  What We Do
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                  {/* BUSINESS WEBSITE */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      hover:bg-white/[0.06]
                      hover:border-white/20
                      transition-all
                      duration-300
                    "
                  >

                    <Code2
                      size={28}
                      className="text-white mb-4"
                    />

                    <h3 className="text-white font-semibold text-lg">
                      Business Websites
                    </h3>

                    <p className="text-white/50 text-sm mt-2 leading-6">
                      Professional websites designed to give your business
                      a strong and trustworthy online presence.
                    </p>

                  </div>


                  {/* UI DESIGN */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      hover:bg-white/[0.06]
                      hover:border-white/20
                      transition-all
                      duration-300
                    "
                  >

                    <Palette
                      size={28}
                      className="text-white mb-4"
                    />

                    <h3 className="text-white font-semibold text-lg">
                      Modern UI Design
                    </h3>

                    <p className="text-white/50 text-sm mt-2 leading-6">
                      Clean, modern and attractive interfaces designed
                      around your brand and customers.
                    </p>

                  </div>


                  {/* RESPONSIVE */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      hover:bg-white/[0.06]
                      hover:border-white/20
                      transition-all
                      duration-300
                    "
                  >

                    <Smartphone
                      size={28}
                      className="text-white mb-4"
                    />

                    <h3 className="text-white font-semibold text-lg">
                      Responsive Websites
                    </h3>

                    <p className="text-white/50 text-sm mt-2 leading-6">
                      Websites that work beautifully across mobile,
                      tablet, laptop and desktop devices.
                    </p>

                  </div>


                  {/* CUSTOM DEVELOPMENT */}

                  <div
                    className="
                      p-5
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      hover:bg-white/[0.06]
                      hover:border-white/20
                      transition-all
                      duration-300
                    "
                  >

                    <Rocket
                      size={28}
                      className="text-white mb-4"
                    />

                    <h3 className="text-white font-semibold text-lg">
                      Custom Web Solutions
                    </h3>

                    <p className="text-white/50 text-sm mt-2 leading-6">
                      Custom websites and web applications built according
                      to your business requirements.
                    </p>

                  </div>

                </div>

              </section>


              {/* ================= WHY Q-S STUDIO ================= */}

              <section>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
                  Why Q-S Studio?
                </h2>

                <p>
                  We don't believe in using the same website for every
                  business. Every project has different goals, customers,
                  branding, and requirements.
                </p>

                <p className="mt-4">
                  Our approach is to understand your idea first and then
                  create a website that represents your business in a
                  professional way.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

                  {[
                    "Modern & Professional Design",
                    "Mobile-Friendly Development",
                    "Clean & Maintainable Code",
                    "Smooth User Experience",
                    "Business-Focused Approach",
                    "Customized Solutions",
                  ].map((item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                        p-3
                        rounded-xl
                        bg-white/[0.03]
                        border
                        border-white/10
                      "
                    >

                      <CheckCircle2
                        size={18}
                        className="text-white/70 flex-shrink-0"
                      />

                      <span className="text-sm text-white/65">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </section>


              {/* ================= OUR PROCESS ================= */}

              <section>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Our Process
                </h2>


                <div className="space-y-4">


                  {/* STEP 1 */}

                  <div
                    className="
                      flex
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-bold
                        flex-shrink-0
                      "
                    >
                      01
                    </div>

                    <div>

                      <h3 className="text-white font-semibold">
                        Understand
                      </h3>

                      <p className="text-white/45 text-sm mt-1">
                        We understand your business, idea, target audience,
                        and project requirements.
                      </p>

                    </div>

                  </div>


                  {/* STEP 2 */}

                  <div
                    className="
                      flex
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-bold
                        flex-shrink-0
                      "
                    >
                      02
                    </div>

                    <div>

                      <h3 className="text-white font-semibold">
                        Design
                      </h3>

                      <p className="text-white/45 text-sm mt-1">
                        We create a modern visual direction that matches
                        your brand and business goals.
                      </p>

                    </div>

                  </div>


                  {/* STEP 3 */}

                  <div
                    className="
                      flex
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-bold
                        flex-shrink-0
                      "
                    >
                      03
                    </div>

                    <div>

                      <h3 className="text-white font-semibold">
                        Develop
                      </h3>

                      <p className="text-white/45 text-sm mt-1">
                        We turn the design into a fast, responsive and
                        functional website.
                      </p>

                    </div>

                  </div>


                  {/* STEP 4 */}

                  <div
                    className="
                      flex
                      gap-4
                      p-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                    "
                  >

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/20
                        flex
                        items-center
                        justify-center
                        text-sm
                        font-bold
                        flex-shrink-0
                      "
                    >
                      04
                    </div>

                    <div>

                      <h3 className="text-white font-semibold">
                        Deliver
                      </h3>

                      <p className="text-white/45 text-sm mt-1">
                        We test everything, polish the final website and
                        prepare it for launch.
                      </p>

                    </div>

                  </div>

                </div>

              </section>


              {/* ================= MISSION ================= */}

              <section>

                <div
                  className="
                    p-6
                    rounded-2xl
                    border
                    border-white/15
                    bg-gradient-to-br
                    from-white/[0.07]
                    to-transparent
                  "
                >

                  <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-3">
                    Our Mission
                  </p>

                  <h2 className="text-xl sm:text-2xl font-bold text-white leading-relaxed">
                    Helping businesses turn their ideas into
                    powerful digital experiences.
                  </h2>

                  <p className="text-white/50 text-sm mt-4 leading-7">
                    At Q-S Studio, our mission is to help businesses,
                    creators, and individuals build a strong online
                    presence through thoughtful design and modern web
                    development.
                  </p>

                </div>

              </section>


              {/* ================= CTA ================= */}

              <section className="text-center pt-4 pb-6">

                <p className="text-white/35 text-sm uppercase tracking-[0.3em] mb-4">
                  Have a project in mind?
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Let's build something great.
                </h2>

                <p className="text-white/45 text-sm mt-3 max-w-xl mx-auto">
                  Tell us about your idea and let's create a website
                  that makes your business stand out.
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="
                    mt-7
                    px-8
                    py-3
                    rounded-full
                    border
                    border-white/20
                    bg-white
                    text-black
                    font-semibold
                    hover:bg-white/90
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  Start a Project
                </button>

              </section>


            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}