import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const STAR_COLORS = ['#1E7FBF', '#2E9E44', '#F2932E', '#C0392B', '#3A3A3A', '#F2B807']

function Star({ x, y, size, color, delay }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4 + Math.random() * 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 24 24" fill={color} className="w-full h-full">
        <path d="M12 2L14.09 8.26L20.78 8.78L15.5 13.14L17.18 19.82L12 16.27L6.82 19.82L8.5 13.14L3.22 8.78L9.91 8.26L12 2Z" />
      </svg>
    </motion.div>
  )
}

export default function ParticleBackground({ count = 20, className = '' }) {
  const containerRef = useRef(null)

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 8 + Math.random() * 16,
    color: STAR_COLORS[i % STAR_COLORS.length],
    delay: Math.random() * 3,
  }))

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, #1E7FBF08 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, #F2932E08 0%, transparent 50%)',
            'radial-gradient(ellipse at 50% 80%, #2E9E4408 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, #1E7FBF08 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {particles.map((p) => (
        <Star key={p.id} {...p} />
      ))}
    </div>
  )
}
