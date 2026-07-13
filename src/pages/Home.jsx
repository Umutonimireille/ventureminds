import { useEffect, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { heroStats } from '../data/site'
import logo from '../assets/logo.png'

const Hero3D = lazy(() => import('../components/Hero3D'))

const members = heroStats.find((s) => s.label === 'Members')

export default function Home() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#1E7FBF')
  }, [setCursorColor])

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Layered gradient backdrop — deep blue-black instead of flat black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, #12233b 0%, #0b1626 45%, #0A0A0A 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, #1E7FBF22 0%, transparent 40%), radial-gradient(circle at 80% 70%, #F2932E1f 0%, transparent 40%), radial-gradient(circle at 60% 20%, #2E9E441a 0%, transparent 35%)',
          }}
        />

        {/* 3D brand mark */}
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>

        {/* Soft vignette so text stays legible over the 3D scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black pointer-events-none" />

        <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center pt-24">
          <motion.img
            src={logo}
            alt="Venture Minds"
            className="mx-auto mb-8 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ maxHeight: '220px' }}
          />

          <motion.p
            className="text-xs md:text-sm tracking-[0.3em] text-white/70 mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Inspiring Rwanda&apos;s Creativity
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We are a student think-tank at African Leadership University, turning entrepreneurial
            ideas into real-world impact through the eLab program.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button to="/team" color="#F2932E">Meet Our Team</Button>
            <Button to="/impact" variant="secondary" color="#F2B807">See Our Impact</Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-brand-orange rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Members strip */}
      <section className="section-padding bg-brand-gray/10 border-y border-white/5">
        <div className="container-max flex justify-center">
          <motion.div
            className="text-center px-12 py-8 rounded-2xl bg-brand-gray/20 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-5xl md:text-6xl font-bold mb-2 text-brand-blue">
              {members?.value ?? 6}
            </div>
            <p className="text-sm text-white/60 tracking-widest uppercase">
              Members Strong
            </p>
          </motion.div>
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
              { title: 'Think', desc: 'We identify and research community challenges through field work and stakeholder engagement.', color: '#1E7FBF', icon: '💡' },
              { title: 'Build', desc: 'We prototype and test solutions with real users, iterating based on community feedback.', color: '#2E9E44', icon: '🔧' },
              { title: 'Impact', desc: 'We deploy solutions and measure outcomes to create lasting change in Rwandan communities.', color: '#F2932E', icon: '🌍' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="p-8 rounded-2xl bg-brand-gray/20 border border-white/10 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: `${item.color}40` }}
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
