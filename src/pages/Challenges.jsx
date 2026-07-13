import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { challenges } from '../data/challenges'

export default function Challenges() {
  const [expanded, setExpanded] = useState(null)
  const { setCursorColor, setIsHovering } = useCursor()

  useEffect(() => {
    setCursorColor('#C0392B')
  }, [setCursorColor])

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Challenges We Identified"
            highlightWord="Challenges"
            subtitle="Through community research and eLab workshops, we mapped the key challenges facing Rwandan communities."
            color="#C0392B"
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max space-y-6">
          {challenges.map((challenge, i) => (
            <Card
              key={challenge.id}
              color={challenge.color}
              className="!overflow-visible"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  className="w-full text-left"
                  onClick={() => setExpanded(expanded === challenge.id ? null : challenge.id)}
                  onMouseEnter={() => {
                    setIsHovering(true)
                    setCursorColor(challenge.color)
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <div className="md:w-1/3 overflow-hidden rounded-xl aspect-video shrink-0">
                      <img
                        src={challenge.image}
                        alt={challenge.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className="text-xs font-bold tracking-widest px-3 py-1 rounded-full inline-block mb-3"
                            style={{ backgroundColor: `${challenge.color}20`, color: challenge.color }}
                          >
                            Challenge {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-2xl font-bold mb-2">{challenge.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed">{challenge.summary}</p>
                        </div>
                        <motion.span
                          className="text-2xl text-white/40 shrink-0 mt-2"
                          animate={{ rotate: expanded === challenge.id ? 45 : 0 }}
                        >
                          +
                        </motion.span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {challenge.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-white/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expanded === challenge.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-white/10 pt-4">
                        <p className="text-white/70 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
