import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

export default function Card({
  children,
  className = '',
  color = '#1E7FBF',
  hoverable = true,
  onClick,
  ...props
}) {
  const { setIsHovering, setCursorColor } = useCursor()

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-brand-gray/20 border border-white/10 ${className}`}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hoverable ? { y: -4 } : {}}
      onMouseEnter={() => {
        if (hoverable) {
          setIsHovering(true)
          setCursorColor(color)
        }
      }}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
      {...props}
    >
      {hoverable && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{ backgroundColor: color }}
          whileHover={{ opacity: 0.08 }}
          transition={{ duration: 0.3 }}
        />
      )}
      {children}
    </motion.div>
  )
}
