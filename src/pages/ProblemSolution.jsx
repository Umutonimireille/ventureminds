import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { problem, solution } from '../data/solution'

export default function ProblemSolution() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#3A3A3A')
  }, [setCursorColor])

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Problem & Solution"
            highlightWord="Solution"
            subtitle="The challenge facing Rwanda's creatives — and how Urumuri Hub answers it."
            color="#3A3A3A"
          />
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-brand-red/15 text-brand-red">
              THE PROBLEM
            </span>

            <div className="mt-6 p-8 md:p-10 rounded-3xl border border-brand-red/30 bg-brand-red/5">
              <p className="text-xs uppercase tracking-widest text-brand-red/80 mb-3">
                According to the {problem.source}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">
                “{problem.lead}”
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed">
                {problem.body}
              </p>
            </div>

            {/* Problem breakdown */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {problem.points.map((p, i) => (
                <motion.div
                  key={p.text}
                  className="flex items-start gap-4 p-6 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(192, 57, 43, 0.06)', borderColor: 'rgba(192, 57, 43, 0.25)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -3 }}
                >
                  <span className="text-2xl shrink-0">{p.icon}</span>
                  <p className="text-white/75 text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Guiding question */}
            <motion.div
              className="mt-10 p-8 md:p-10 rounded-3xl border-l-4 border-brand-gold bg-gradient-to-r from-brand-gold/10 to-transparent"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs uppercase tracking-widest text-brand-gold mb-3">
                Our Guiding Question
              </p>
              <p className="text-lg md:text-2xl font-semibold leading-relaxed text-white/90">
                {problem.question}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <motion.div
            className="p-8 md:p-12 rounded-3xl border"
            style={{ backgroundColor: 'rgba(46, 158, 68, 0.08)', borderColor: 'rgba(46, 158, 68, 0.3)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-brand-green/15 text-brand-green">
              OUR SOLUTION
            </span>

            <div className="mt-6 flex flex-col md:flex-row md:items-end gap-3 md:gap-5">
              <h3 className="text-4xl md:text-5xl font-bold">
                <span className="text-brand-gold">{solution.hubName}</span>
              </h3>
              <span className="text-white/50 text-sm md:text-base md:pb-2">
                {solution.alsoKnownAs}
              </span>
            </div>
            <p className="text-brand-green text-sm tracking-wide mt-2 mb-6">
              {solution.tagline}
            </p>

            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-4">
              {solution.intro}
            </p>
            <p className="text-white/75 text-sm md:text-base leading-relaxed">
              {solution.insight}
            </p>
          </motion.div>

          {/* Ecosystem features */}
          <div className="mt-12">
            <h4 className="text-sm font-bold tracking-widest text-brand-gold mb-6 text-center">
              ONE ECOSYSTEM, EVERYTHING CREATIVES NEED
            </h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="p-7 rounded-2xl border"
                  style={{ backgroundColor: `${f.color}08`, borderColor: `${f.color}25` }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  whileHover={{ y: -4, borderColor: `${f.color}55` }}
                >
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h5 className="text-lg font-bold mb-2" style={{ color: f.color }}>
                    {f.title}
                  </h5>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goal */}
          <motion.div
            className="mt-12 text-center p-10 rounded-3xl border"
            style={{ backgroundColor: 'rgba(30, 127, 191, 0.07)', borderColor: 'rgba(30, 127, 191, 0.2)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">Our 2032 Goal</p>
            <p className="text-2xl md:text-3xl font-bold text-gradient-orange">
              {solution.goal}
            </p>
          </motion.div>

          <div className="text-center pt-12">
            <Button to="/impact" color="#F2B807">See Our Impact</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
