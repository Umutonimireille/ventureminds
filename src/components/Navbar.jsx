import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/site'
import { useCursor } from '../context/CursorContext'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { setCursorColor, setIsHovering } = useCursor()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const activeLink = navLinks.find((l) => l.path === location.pathname) || navLinks[0]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
      animate={{ paddingTop: scrolled ? 8 : 16, paddingBottom: scrolled ? 8 : 16 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onMouseEnter={() => {
            setCursorColor('#F2932E')
            setIsHovering(true)
          }}
          onMouseLeave={() => {
            setCursorColor(activeLink.color)
            setIsHovering(false)
          }}
        >
          <motion.img
            src={logo}
            alt="Venture Minds"
            className="object-contain"
            animate={{ height: scrolled ? 36 : 44 }}
            transition={{ duration: 0.3 }}
          />
          <span className="hidden sm:block font-bold text-sm tracking-wider">
            <span className="text-brand-white">VENTURE</span>{' '}
            <span className="text-brand-orange">MINDS</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="relative px-3 py-2 text-sm font-medium transition-colors"
                  style={{ color: isActive ? link.color : 'rgba(255,255,255,0.7)' }}
                  onMouseEnter={() => {
                    setCursorColor(link.color)
                    setIsHovering(true)
                  }}
                  onMouseLeave={() => {
                    setCursorColor(activeLink.color)
                    setIsHovering(false)
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                      style={{ backgroundColor: link.color }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-0.5 bg-brand-white"
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-white"
            animate={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-brand-white"
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-black/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? link.color : 'rgba(255,255,255,0.8)',
                        backgroundColor: isActive ? `${link.color}15` : 'transparent',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
