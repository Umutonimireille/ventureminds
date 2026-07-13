import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { projects } from '../data/projects'

export default function ProblemSolution() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#3A3A3A')
  }, [setCursorColor])

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Problem & Solution"
            highlightWord="Solution"
            subtitle="How we transformed community challenges into actionable projects during the eLab program."
            color="#3A3A3A"
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mb-8">
                <span
                  className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                >
                  Project {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-3xl font-bold mt-3">{project.title}</h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Problem */}
                <motion.div
                  className="p-8 rounded-2xl border border-brand-red/30 bg-brand-red/5"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{project.problem.icon}</span>
                    <h4 className="text-lg font-bold text-brand-red">{project.problem.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{project.problem.description}</p>
                </motion.div>

                {/* Solution */}
                <motion.div
                  className="p-8 rounded-2xl border border-brand-green/30 bg-brand-green/5"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{project.solution.icon}</span>
                    <h4 className="text-lg font-bold text-brand-green">{project.solution.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{project.solution.description}</p>
                </motion.div>
              </div>

              {/* Visual + Outcomes */}
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="overflow-hidden rounded-2xl aspect-video">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-brand-gold mb-4">KEY OUTCOMES</h4>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome) => (
                      <motion.li
                        key={outcome}
                        className="flex items-center gap-3 text-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {outcome}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < projects.length - 1 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}

          <div className="text-center pt-8">
            <Button to="/impact" color="#F2B807">See Our Full Impact</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
