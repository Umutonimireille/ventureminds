import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCursor } from '../context/CursorContext'

const variants = {
  primary: 'bg-brand-orange text-brand-black hover:bg-brand-orange/90',
  secondary: 'border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-brand-black',
  outline: 'border border-white/30 text-white hover:border-brand-orange hover:text-brand-orange',
  ghost: 'text-white/80 hover:text-brand-orange',
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  color,
  ...props
}) {
  const { setIsHovering, setCursorColor } = useCursor()

  const hoverHandlers = {
    onMouseEnter: () => {
      setIsHovering(true)
      if (color) setCursorColor(color)
    },
    onMouseLeave: () => setIsHovering(false),
  }

  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.97 },
    ...hoverHandlers,
    ...props,
  }

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link to={to} className={classes} {...hoverHandlers}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
