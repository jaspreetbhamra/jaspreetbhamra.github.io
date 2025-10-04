import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaGoogleScholar } from 'react-icons/fa6'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"


import TranslateButton from '../components/TranslateButton.jsx'
import { getBlurb } from '../utils/api.js'
import Sidebar from "../components/Sidebar"


const navLinks = [
  { label: 'Resume', href: 'https://drive.google.com/file/d/1dutCWoKjZ_n3XdYozZNvu5iDTLdihdAT/view?usp=drive_link', external: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '#experience' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: FaLinkedin },
  { label: 'Twitter', href: 'https://twitter.com/yourhandle', icon: FaTwitter },
  { label: 'Scholar', href: 'https://scholar.google.com/citations?user=XXXXXX', icon: FaGoogleScholar },
]

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const blurbVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

const fiberVariants = ['theme-parchment-fibers-1', 'theme-parchment-fibers-2', 'theme-parchment-fibers-3']
const randomFiber = fiberVariants[Math.floor(Math.random() * fiberVariants.length)]


const Home = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const defaultLang = params.get("lang") || "elvish"
  const [language, setLanguage] = useState(defaultLang)

  // const [language, setLanguage] = useState('elvish')
  const [blurbs, setBlurbs] = useState({ elvish: '', english: '' })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const loadBlurbs = async () => {
      try {
        const [elvishText, englishText] = await Promise.all([
          getBlurb('elvish'),
          getBlurb('english'),
        ])
        if (!cancelled) {
          setBlurbs({ elvish: elvishText, english: englishText })
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Failed to load translations', error)
        if (!cancelled) {
          setBlurbs({ elvish: '', english: '' })
          setIsLoading(false)
        }
      }
    }
    loadBlurbs()
    return () => {
      cancelled = true
    }
  }, [])

  const isTranslated = language === 'english'
  const themeClass = useMemo(
    () => (isTranslated ? 'theme-dark' : 'theme-parchment'),
    [isTranslated],
  )

  const headingFontClass = 'font-english-display'
  const buttonFontClass = headingFontClass
  const blurbFontClass = isTranslated
    ? {headingFontClass}
    : 'font-elvish-display'

  const textColorClass = isTranslated ? 'text-slate-100' : 'text-slate-800'

  const handleToggle = () => {
    setLanguage((prev) => (prev === 'elvish' ? 'english' : 'elvish'))
  }

  const currentBlurb = blurbs[language]

  return (
    // <div className={`relative min-h-screen ${themeClass} theme-overlay`}>
    <div className={`relative min-h-screen ${themeClass} theme-overlay ${randomFiber}`}>
      <div className="relative z-10">
      <motion.div
        className={`relative min-h-screen overflow-x-hidden transition-colors duration-700 ease-in-out ${themeClass}`}
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        variants={backdropVariants}
      >
        {/* // Uncomment the following to add a dark overlay in dark mode */}
        {/* {isTranslated && (
          <div
            className="pointer-events-none absolute inset-0 bg-slate-900/40"
            aria-hidden
          />
        )} */}

        {isTranslated && <Navbar />}

        <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
          {/* Left Sidebar */}
          <Sidebar textColorClass={textColorClass} headingFontClass={headingFontClass} />


          {/* Main Content */}
          <main className={`fantasy-page flex flex-1 flex-col justify-center gap-10 p-10`}>

            <section className="rounded-3xl border border-transparent bg-transparent shadow-none">
              {/* <div className="relative min-h-[30vh] max-h-[50vh] overflow-y-auto"> */}
              <div className="relative min-h-[20vh] max-h-[80vh]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={language}
                    initial={{
                      opacity: 0,
                      filter: 'blur(8px)',
                      letterSpacing: '0.25em',
                    }}
                    animate={{
                      opacity: 1,
                      filter: 'blur(0px)',
                      letterSpacing: '0.03em',
                    }}
                    exit={{
                      opacity: 0,
                      filter: 'blur(8px)',
                      letterSpacing: '0.35em',
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className={`blurb-text whitespace-pre-line text-lg leading-relaxed ${blurbFontClass} ${textColorClass}`}
                    // style={{
                    //   fontFamily: isTranslated
                    //     ? 'Playfair Display, serif'
                    //     : 'Tengwar Feanor, serif',
                    // }}
                    // style={{
                    //   fontFamily: {blurbFontClass}
                    // }}
                  >
                    {isLoading ? 'Summoning the tale...' : currentBlurb}
                  </motion.div>
                </AnimatePresence>
              </div>
            </section>

            {/* Translate Button */}
            <div className="flex justify-start">
              <div className="relative z-10">
                <TranslateButton
                  isTranslated={isTranslated}
                  onToggle={handleToggle}
                  disabled={isLoading}
                  className={`translate-btn ${buttonFontClass} ${textColorClass}`}
                />
              </div>
            </div>

            {/* Nav links (only after translation) */}
            {/* <AnimatePresence>
              {isTranslated && !isLoading && (
                <motion.nav
                  key="nav-links"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 flex flex-wrap gap-3"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-400/60 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:border-sky-500 hover:text-sky-300"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      {link.label}
                      <span aria-hidden className="text-sky-400">→</span>
                    </motion.a>
                  ))}

                </motion.nav>
              )}
            </AnimatePresence> */}
          </main>
        </div>

        <footer
          className={`fantasy-page relative w-full py-6 mt-auto text-xs text-center border-t border-slate-400/30 ${textColorClass}`}
        >
          {/* Ornamental flourish / rune mark */}
          <div className="flex justify-center mb-2">
            <img
              src="src/assets/images/flourish.svg"
              alt="Ornamental flourish"
              className="h-6 flourish-mark"
            />
          </div>

          <p>
            &copy; {new Date().getFullYear()} Jaspreet Kaur Bhamra. Crafted with care and a hint of Elvish magic.
          </p>
        </footer>


      </motion.div>
    </div>
    </div>
  )
}

export default Home
