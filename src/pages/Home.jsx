import { useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'

const Hero3D = lazy(() => import('../components/Hero3D'))

export default function Home() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#1E7FBF')
  }, [setCursorColor])

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered gradient backdrop — vibrant and colorful */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 120% 100% at 50% 40%, #172d42 0%, #0d1a24 45%, #080f15 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              'radial-gradient(circle at 15% 25%, #1E7FBF50 0%, transparent 40%), radial-gradient(circle at 85% 75%, #F2932E45 0%, transparent 45%), radial-gradient(circle at 50% 15%, #2E9E4440 0%, transparent 35%), radial-gradient(circle at 20% 70%, #F2B80735 0%, transparent 40%), radial-gradient(circle at 75% 30%, #C0392B35 0%, transparent 35%), radial-gradient(circle at 60% 60%, #3399CC30 0%, transparent 40%)',
          }}
        />

        {/* Soft vignette so text stays legible over the 3D scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/20 via-transparent to-brand-black/40 pointer-events-none" />

        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            {/* Text on the left */}
            <motion.div
              className="text-left lg:pr-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-xs md:text-sm tracking-[0.3em] text-white/70 mb-6 uppercase"
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
                Venture <span style={{ color: '#1E7FBF' }}>Minds</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-white/80 max-w-xl mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We are a student think-tank at African Leadership University, turning entrepreneurial
                ideas into real-world impact through the eLab program.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Button to="/team" color="#F2932E">Meet Our Team</Button>
                <Button to="/impact" variant="secondary" color="#F2B807">See Our Impact</Button>
              </motion.div>
            </motion.div>

            {/* 3D brand mark on the right */}
            <motion.div
              className="hidden lg:block h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Suspense fallback={null}>
                <Hero3D />
              </Suspense>
            </motion.div>
          </div>
        </div>

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

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Think', desc: 'We identify and research community challenges through field work and stakeholder engagement.', color: '#1E7FBF', bgColor: 'rgba(30, 127, 191, 0.08)', icon: '💡' },
              { title: 'Build', desc: 'We prototype and test solutions with real users, iterating based on community feedback.', color: '#2E9E44', bgColor: 'rgba(46, 158, 68, 0.08)', icon: '🔧' },
              { title: 'Impact', desc: 'We deploy solutions and measure outcomes to create lasting change in Rwandan communities.', color: '#F2932E', bgColor: 'rgba(242, 147, 46, 0.08)', icon: '🌍' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 rounded-2xl border text-center"
                style={{ backgroundColor: item.bgColor, borderColor: `${item.color}20` }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: `${item.color}60` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button to="/about" variant="outline" color="#2E9E44">Learn Our Story</Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
