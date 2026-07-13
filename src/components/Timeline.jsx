import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function Timeline({ events }) {
  const { setIsHovering, setCursorColor } = useCursor()

  return (
    <div className="relative">
      {/* Center line - desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />

      <div className="space-y-12 md:space-y-0">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0
          return (
            <motion.div
              key={event.id}
              className={`relative md:flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Content */}
              <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div
                  className="p-6 rounded-2xl bg-brand-gray/20 border border-white/10 hover:border-white/20 transition-colors"
                  onMouseEnter={() => {
                    setIsHovering(true)
                    setCursorColor(event.color)
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  whileHover={{ y: -4 }}
                >
                  <span
                    className="inline-block text-xs font-bold tracking-widest mb-2 px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${event.color}20`, color: event.color }}
                  >
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{event.description}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 z-10"
                style={{ borderColor: event.color, backgroundColor: '#0A0A0A' }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              />

              {/* Image */}
              <div className={`md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12'}`}>
                <motion.div
                  className="overflow-hidden rounded-xl aspect-video"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
