import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { CursorProvider } from './context/CursorContext'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import ProblemSolution from './pages/ProblemSolution'
import Impact from './pages/Impact'
import Contact from './pages/Contact'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, #1E7FBF, #2E9E44, #F2932E, #F2B807)',
      }}
    />
  )
}

export default function App() {
  const location = useLocation()

  return (
    <CursorProvider>
      <CustomCursor />
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <AnimatedPage key={location.pathname}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/solutions" element={<ProblemSolution />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatedPage>
        </AnimatePresence>
      </main>
      <Footer />
    </CursorProvider>
  )
}
