import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ParallaxBackground from './components/ParallaxBackground'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import CareerPage from './pages/CareerPage'
import ContactPage from './pages/ContactPage'
import DevelopersPage from './pages/DevelopersPage'
import FeaturesPage from './pages/FeaturesPage'
import HelpPage from './pages/HelpPage'
import PremiumPage from './pages/PremiumPage'
import StatusPage from './pages/StatusPage'
import TeamPage from './pages/TeamPage'

// Компонент для анимированных переходов
function AnimatedRoutes() {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02
    }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Home />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <BlogPage />
          </motion.div>
        } />
        <Route path="/career" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <CareerPage />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ContactPage />
          </motion.div>
        } />
        <Route path="/developers" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <DevelopersPage />
          </motion.div>
        } />
        <Route path="/features" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <FeaturesPage />
          </motion.div>
        } />
        <Route path="/help" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <HelpPage />
          </motion.div>
        } />
        <Route path="/premium" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <PremiumPage />
          </motion.div>
        } />
        <Route path="/status" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <StatusPage />
          </motion.div>
        } />
        <Route path="/team" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <TeamPage />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-white relative">
        <ParallaxBackground />
        <Header />
        <main className="min-h-screen relative z-10">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App