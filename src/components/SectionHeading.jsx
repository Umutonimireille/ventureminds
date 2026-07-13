import { motion } from 'framer-motion'

export default function SectionHeading({
  title,
  subtitle,
  highlightWord,
  align = 'center',
  color = '#F2932E',
}) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'

  const renderTitle = () => {
    if (!highlightWord) {
      return <span className="text-brand-white">{title}</span>
    }

    const parts = title.split(highlightWord)
    return (
      <>
        <span className="text-brand-white">{parts[0]}</span>
        <span style={{ color }}>{highlightWord}</span>
        <span className="text-brand-white">{parts[1] || ''}</span>
      </>
    )
  }

  return (
    <motion.div
      className={`mb-12 md:mb-16 ${alignClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <motion.div
        className="mt-6 h-1 rounded-full mx-auto"
        style={{ backgroundColor: color, width: align === 'center' ? 60 : 60 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </motion.div>
  )
}
