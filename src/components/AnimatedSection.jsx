import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function AnimatedSection({
  children,
  className = '',
  color = '#1E7FBF',
  id,
  stagger = false,
}) {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    const section = document.getElementById(id)
    if (!section || !id) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCursorColor(color)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [id, color, setCursorColor])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: stagger ? { staggerChildren: 0.15 } : {},
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      id={id}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {stagger
        ? children.map
          ? children
          : motion.div && typeof children === 'function'
            ? children(itemVariants)
            : children
        : children}
    </motion.section>
  )
}
