import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function TeamCard({ member, index }) {
  const { setIsHovering, setCursorColor } = useCursor()

  return (
    <motion.div
      className="group relative h-80 perspective-1000"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => {
        setIsHovering(true)
        setCursorColor(member.color)
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border" style={{ borderColor: `${member.color}25`, backgroundColor: `${member.color}08` }}>
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-3/4 object-cover"
            />
          ) : (
            <div
              className="w-full h-3/4 flex items-center justify-center text-4xl font-bold"
              style={{ backgroundColor: `${member.color}20`, color: member.color }}
            >
              {getInitials(member.name)}
            </div>
          )}
          <div className="p-4 text-center">
            <h3 className="font-bold text-lg">{member.name}</h3>
            <p className="text-sm" style={{ color: member.color }}>{member.role}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)]"
          style={{ borderColor: `${member.color}40`, backgroundColor: `${member.color}12` }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-4"
            style={{ backgroundColor: `${member.color}30`, color: member.color }}
          >
            {getInitials(member.name)}
          </div>
          <h3 className="font-bold text-lg mb-1">{member.name}</h3>
          <p className="text-sm mb-4" style={{ color: member.color }}>{member.role}</p>
          <p className="text-sm text-white/70 leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </motion.div>
  )
}
