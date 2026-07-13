import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import StatCounter from '../components/StatCounter'
import ImageGallery from '../components/ImageGallery'
import Button from '../components/Button'
import { impactStats, testimonials, impactGallery, featuredStory } from '../data/impact'

export default function Impact() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#F2B807')
  }, [setCursorColor])

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={12} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Our Impact"
            highlightWord="Impact"
            subtitle="Measurable change in Rwandan communities — the outcomes of our eLab journey."
            color="#F2B807"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <StatCounter stats={impactStats} />
        </div>
      </section>

      {/* Featured HELP-LAB story */}
      <section className="section-padding pt-0">
        <div className="container-max">
          <motion.div
            className="grid md:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden bg-brand-gray/20 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <span
                className="inline-block text-xs font-bold tracking-widest mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: `${featuredStory.color}20`, color: featuredStory.color }}
              >
                {featuredStory.tag}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredStory.title}</h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                {featuredStory.body}
              </p>
              <Button
                href={featuredStory.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                color={featuredStory.color}
              >
                ▶ Watch on YouTube
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-brand-gray/10">
        <div className="container-max">
          <SectionHeading
            title="Community Voices"
            highlightWord="Voices"
            subtitle="Hear from the people and communities we've worked with."
            color="#2E9E44"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="p-8 rounded-2xl bg-brand-gray/20 border border-white/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
              >
                <span
                  className="text-5xl font-serif leading-none absolute top-4 left-6 opacity-20"
                  style={{ color: t.color }}
                >
                  &ldquo;
                </span>
                <p className="text-white/80 text-sm leading-relaxed mb-6 mt-8 italic">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.author}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact gallery */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeading
            title="Impact in Action"
            highlightWord="Action"
            subtitle="Photos from our community deployments, training sessions, and outreach activities."
            color="#F2932E"
          />
          <ImageGallery images={impactGallery} columns={2} />

          <div className="text-center mt-12">
            <Button to="/contact" variant="secondary" color="#1E7FBF">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
