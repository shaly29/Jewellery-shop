import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import heroImage from "../assets/images/hero/hero.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-wine flex items-center pt-24"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Model wearing Aurelia fine jewellery"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-[72%_center]
            md:object-[75%_center]
          "
        />

        {/* Dark overlay on LEFT - keeps content readable */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-wine
            via-wine/85
            to-wine/10
          "
        />

        {/* Bottom dark gradient */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-wine-900/90
            via-transparent
            to-wine-900/20
          "
        />

        {/* Subtle overall wine tint */}
        <div className="absolute inset-0 bg-wine/10" />
      </div>

      {/* ================= SPARKLES ================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          top-[28%]
          right-[18%]
          w-2
          h-2
          rounded-full
          bg-gold
        "
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.4,
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          top-[48%]
          right-[35%]
          w-1.5
          h-1.5
          rounded-full
          bg-gold-light
        "
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          delay: 0.6,
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          top-[20%]
          right-[42%]
          w-1
          h-1
          rounded-full
          bg-gold
        "
        animate={{
          opacity: [0.1, 1, 0.1],
          scale: [0.7, 1.5, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
          delay: 1,
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-8xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* LEFT SIDE CONTENT */}
        <div
          className="
            w-full
            max-w-xl
            lg:max-w-2xl
            text-left
            py-16
            md:py-20
          "
        >
          {/* Eyebrow */}
          <motion.span
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              sm:text-sm
              font-medium
              tracking-[0.3em]
              uppercase
              text-gold-light
            "
          >
            Timeless Beauty. Endless Memories.
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="
              mt-5
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-7xl
              xl:text-8xl
              font-semibold
              leading-[0.98]
              text-white
            "
          >
            Elegance
            <br />
            That Lasts

            <span
              className="
                block
                mt-2
                font-script
                text-gold-light
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-9xl
                leading-[0.8]
                font-normal
              "
            >
              Forever
            </span>
          </motion.h1>

          {/* Decorative Divider */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={fadeUp}
            className="
              mt-8
              flex
              items-center
              justify-start
              gap-4
              text-gold
            "
          >
            <span className="h-px w-12 bg-gold/70" />

            <GiLotus className="text-xl text-gold" />

            <span className="h-px w-12 bg-gold/70" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="show"
            custom={0.36}
            variants={fadeUp}
            className="
              mt-7
              max-w-lg
              text-base
              sm:text-lg
              leading-relaxed
              text-white/75
            "
          >
            Exquisite jewellery for your most precious moments — handcrafted
            with certified diamonds and timeless artistry.
          </motion.p>

          {/* Button */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0.48}
            variants={fadeUp}
            className="mt-9"
          >
            <a
              href="#shop"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-gold
                px-8
                py-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-ink
                transition-all
                duration-300
                hover:bg-gold-light
                hover:-translate-y-1
                shadow-lg
                shadow-black/20
              "
            >
              Explore Collection
              <FiArrowRight className="text-lg" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= RIGHT SIDE IMAGE FADE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          w-1/3
          bg-gradient-to-l
          from-transparent
          to-transparent
        "
      />
    </section>
  );
}

