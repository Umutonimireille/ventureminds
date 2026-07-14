import { useEffect } from 'react'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/team'

export default function Team() {
  const { setCursorColor } = useCursor()

  useEffect(() => {
    setCursorColor('#F2932E')
  }, [setCursorColor])

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Our Team"
            highlightWord="Team"
            subtitle="The passionate minds behind Venture Minds students, innovators, and changemakers from ALU Rwanda."
            color="#F2932E"
          />
        </div>
      </section>

      <section className="section-padding pt-0" style={{ backgroundColor: 'rgba(242, 147, 46, 0.04)' }}>
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          <p className="text-center text-white/40 text-sm mt-12">
            {/* SWAP: Update team member photos in src/data/team.js */}
            Hover over a card to flip and read their bio. Add photos by setting the photo field in team.js.
          </p>
        </div>
      </section>
    </div>
  )
}
