import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import ImageGallery from '../components/ImageGallery'
import { aboutContent } from '../data/site'
import { timelineEvents, galleryImages } from '../data/timeline'

export default function About() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#2E9E44')
  }, [setCursorColor])

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <ParticleBackground count={12} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="About Venture Minds"
            highlightWord="Minds"
            subtitle="Our story as a student think-tank driving entrepreneurial creativity in Rwanda."
            color="#2E9E44"
          />
        </div>
      </section>

      {/* Story, Mission, Vision */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Our Story', content: aboutContent.story, color: '#1E7FBF' },
              { title: 'Our Mission', content: aboutContent.mission, color: '#2E9E44' },
              { title: 'Our Vision', content: aboutContent.vision, color: '#F2932E' },
            ].map((block, i) => (
              <motion.div
                key={block.title}
                className="p-8 rounded-2xl bg-brand-gray/20 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: block.color }}>
                  {block.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">{block.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-brand-gray/10">
        <div className="container-max">
          <SectionHeading
            title="Our eLab Journey"
            highlightWord="eLab"
            subtitle="From formation to impact — the milestones that shaped Venture Minds."
            color="#F2B807"
          />
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Workshops & Sessions"
            highlightWord="Sessions"
            subtitle="Moments from our eLab workshops, brainstorming sessions, and community visits."
            color="#2E9E44"
          />
          <ImageGallery images={galleryImages} />
        </div>
      </section>
    </div>
  )
}
