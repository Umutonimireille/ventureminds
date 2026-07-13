import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../context/CursorContext'
import ParticleBackground from '../components/ParticleBackground'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'

const socialLinks = [
  { name: 'Twitter', url: '#', icon: '𝕏' },
  { name: 'LinkedIn', url: '#', icon: 'in' },
  { name: 'Instagram', url: '#', icon: '📷' },
]

export default function Contact() {
  const { setCursorColor, setIsHovering } = useCursor()

  useEffect(() => {
    setCursorColor('#1E7FBF')
  }, [setCursorColor])

  return (
    <div>
      <section className="relative pt-32 pb-12 overflow-hidden">
        <ParticleBackground count={10} />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Contact Us"
            highlightWord="Us"
            subtitle="Want to collaborate, partner, or learn more about Venture Minds? We'd love to hear from you."
            color="#1E7FBF"
          />
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6">
                Send us a <span className="text-brand-orange">message</span>
              </h3>
              <ContactForm />
            </motion.div>

            {/* Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold mb-6">
                  Get in <span className="text-brand-orange">touch</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: 'African Leadership University, Kigali, Rwanda', icon: '📍' },
                    { label: 'Email', value: 'ventureminds@alu.edu', icon: '✉️', href: 'mailto:ventureminds@alu.edu' },
                    { label: 'Program', value: 'eLab — Entrepreneurship Lab', icon: '🚀' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-brand-gray/20 border border-white/10">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-xs text-white/40 tracking-widest uppercase mb-1">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-white/80 hover:text-brand-orange transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white/80">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold tracking-widest text-white/40 mb-4">FOLLOW US</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="w-12 h-12 rounded-xl bg-brand-gray/30 border border-white/10 flex items-center justify-center text-sm font-bold hover:border-brand-orange hover:text-brand-orange transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      onMouseEnter={() => {
                        setIsHovering(true)
                        setCursorColor('#F2932E')
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Embedded map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video bg-brand-gray/20">
                <iframe
                  title="ALU Rwanda Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255168.09798496647!2d30.061816!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dcec495c0f777b%3A0x5e3b2f5f5b5b5b5b!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1"
                  className="w-full h-full border-0 grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
