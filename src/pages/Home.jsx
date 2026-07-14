import { useEffect, useRef, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'

const Hero3D = lazy(() => import('../components/Hero3D'))

const cardsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  const { setCursorColor } = useCursor()
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Parallax: the backdrop drifts slower than the content as you scroll away
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  useEffect(() => {
    setCursorColor('#1E7FBF')
  }, [setCursorColor])

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Layered gradient backdrop — parallaxed and slowly drifting */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 120% 100% at 50% 40%, #172d42 0%, #0d1a24 45%, #080f15 100%)"
            }}
          />
          <div
            className="absolute inset-0 opacity-80 animate-gradient"
            style={{
              background:
                "radial-gradient(circle at 15% 25%, #1E7FBF50 0%, transparent 40%), radial-gradient(circle at 85% 75%, #F2932E45 0%, transparent 45%), radial-gradient(circle at 50% 15%, #2E9E4440 0%, transparent 35%), radial-gradient(circle at 20% 70%, #F2B80735 0%, transparent 40%), radial-gradient(circle at 75% 30%, #C0392B35 0%, transparent 35%), radial-gradient(circle at 60% 60%, #3399CC30 0%, transparent 40%)"
            }}
          />
        </motion.div>

        {/* Soft vignette so text stays legible over the 3D scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/40 pointer-events-none" />

        <motion.div
          className="relative z-10 container-max px-4 sm:px-6 lg:px-8 h-screen flex items-center"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center w-full">
            {/* Text on the left */}
            <motion.div
              className="text-left lg:pr-8 lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-md md:text-sm tracking-[0.3em] text-white/70 mb-6 uppercase font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Inspiring Rwanda&apos;s Creativity
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Venture <span style={{ color: "#F2932E" }}>Minds</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-white/85 max-w-xl mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                A student think-tank at African Leadership University, building{" "}
                <span className="text-white font-semibold">Urumuri Hub</span>{" "}
                one connected ecosystem for Rwanda&apos;s creative economy.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button to="/solutions" color="#F2932E">
                  Explore the Solution
                </Button>
                <Button to="/team" variant="secondary" color="#F2B807">
                  Meet Our Team
                </Button>
              </motion.div>
            </motion.div>

            {/* 3D brand mark on the right */}
            <motion.div
              className="hidden lg:flex items-center justify-center lg:col-span-3 h-96 lg:h-screen"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full">
                <Suspense fallback={null}>
                  <Hero3D />
                </Suspense>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{ opacity: contentOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/25 flex justify-center pt-1.5">
            <motion.span
              className="w-1 h-1.5 rounded-full bg-white/60"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Intro teaser */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Who We Are"
            highlightWord="We"
            subtitle="A collective of passionate ALU students using design thinking, entrepreneurship, and community engagement to solve Rwanda's most pressing challenges."
            color="#1E7FBF"
          />

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {[
              {
                step: "01",
                title: "Think",
                desc: "We studied the gaps facing Rwanda’s creatives and imagined Urumuri Hub as the answer.",
                color: "#1E7FBF"
              },
              {
                step: "02",
                title: "Build",
                desc: "We’re now building Urumuri Hub  turning that idea into a real, working platform.",
                color: "#2E9E44"
              },
              {
                step: "03",
                title: "Impact",
                desc: "We believe in lasting impact for Rwanda, and for Africa at large.",
                color: "#F2932E"
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden transition-shadow duration-300"
                variants={cardItem}
                whileHover={{ y: -6 }}
                style={{ "--glow": item.color }}
              >
                {/* Accent bar that grows on hover */}
                <span
                  className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div
                  className="text-5xl font-bold mb-4 opacity-20 group-hover:opacity-60 transition-opacity"
                  style={{ color: item.color }}
                >
                  {item.step}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
                {/* Soft glow on hover */}
                <span
                  className="pointer-events-none absolute -bottom-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: item.color }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button to="/about" variant="outline" color="#2E9E44">
              Learn Our Story
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
