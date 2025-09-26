import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import TranslateButton from '../components/TranslateButton.jsx'
import { getBlurb } from '../utils/api.js'

const navLinks = [
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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

const Home = () => {
  const [language, setLanguage] = useState('elvish')
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
    ? 'font-english-display'
    : 'font-elvish-display'

  const handleToggle = () => {
    setLanguage((prev) => (prev === 'elvish' ? 'english' : 'elvish'))
  }

  const currentBlurb = blurbs[language]

  return (
    <motion.div
      // className={`relative min-h-screen overflow-hidden transition-colors duration-700 ease-in-out ${themeClass}`}
      // initial="initial"
      // animate="animate"
      // exit="exit"
      className={`relative min-h-screen overflow-hidden transition-colors duration-700 ${themeClass}`}
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      variants={backdropVariants}
    >
      {isTranslated ? (
        <div className="absolute inset-0 bg-slate-900/40" aria-hidden />
      ) : null}

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="container flex flex-col gap-6 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <motion.p
              className="text-xs uppercase tracking-[0.6em] text-slate-500"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Beyond the Binary
            </motion.p>
            <motion.h1
              className={`text-4xl font-semibold text-slate-100 drop-shadow-sm sm:text-5xl ${headingFontClass}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Jay
            </motion.h1>
          </div>

          <div className="flex w-full justify-end sm:w-auto">
            <AnimatePresence>
              {isTranslated && !isLoading ? (
                <motion.nav
                  key="nav-links"
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 flex flex-wrap gap-3 self-end sm:mt-0 sm:self-start"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-400/60 bg-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 transition-colors hover:border-sky-500 hover:text-sky-300"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                    >
                      {link.label}
                      <span aria-hidden className="text-sky-400">→</span>
                    </motion.a>
                  ))}
                </motion.nav>
              ) : null}
            </AnimatePresence>
          </div>
        </header>

        <main className={`container flex flex-1 flex-col justify-center gap-10 pb-20`}>
          {/* <section className="rounded-3xl border border-transparent bg-transparent p-10 shadow-none"> */}
          <section className={`rounded-3xl border border-transparent bg-transparent p-10 shadow-none`}>
            <div className="relative min-h-[3rem]"> {/* Fixed area for text */}
              <AnimatePresence mode="wait">
                {/* <motion.p
                  key={language}
                  variants={blurbVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 1.5 }}
                  // className="blurb-text whitespace-pre-line text-lg leading-relaxed"
                  className={`blurb-text whitespace-pre-line text-lg leading-relaxed ${blurbFontClass}`}
                  // className={`blurb-text whitespace-pre-line text-lg leading-relaxed ${isTranslated ? 'font-english-display' : 'font-elvish-display'}`}
                >
                  {isLoading ? 'Loading story...' : currentBlurb}
                </motion.p> */}
                {/* <motion.p
                  key={language}
                  initial={{
                    opacity: 0,
                    filter: 'blur(8px)',
                    letterSpacing: '0.4em',
                  }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    letterSpacing: '0.05em',
                    color: isTranslated ? '#f1f5f9' : '#1c1917',
                    textShadow: isTranslated
                      ? '0px 0px 12px rgba(135, 206, 250, 0.9)' // icy glow for English
                      : '0px 0px 10px rgba(255, 215, 0, 0.8)', // golden glow for Elvish
                  }}
                  exit={{
                    opacity: 0,
                    filter: 'blur(12px)',
                    letterSpacing: '0.5em',
                    textShadow: '0px 0px 25px rgba(255, 140, 0, 0.9)', // fiery ash glow
                  }}
                  transition={{
                    duration: 2.0,
                    ease: 'easeInOut',
                  }}
                  className={`absolute inset-0 blurb-text whitespace-pre-line text-lg leading-relaxed ${
                    isTranslated ? 'font-english-display' : 'font-elvish-display'
                  }`}
                  style={{
                    fontFamily: isTranslated ? 'Playfair Display, serif' : 'Tengwar Feanor, serif',
                  }}
                >
                  {isLoading ? 'Summoning the Tale...' : currentBlurb}
                </motion.p> */}
                <motion.p
                  key={language}
                  initial={{ opacity: 0, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(8px)' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                  className={`absolute inset-1 blurb-text whitespace-pre-line text-lg leading-relaxed ${
                    isTranslated ? 'font-english-display' : 'font-elvish-display'
                  }`}
                  style={{
                    fontFamily: isTranslated
                      ? 'Playfair Display, serif'
                      : 'Tengwar Feanor, serif',
                  }}
                >
                  {isLoading ? 'Summoning the tale...' : currentBlurb}
                </motion.p>
              </AnimatePresence>
            </div>
          </section>

          <div className="flex justify-start">
            <TranslateButton
              isTranslated={isTranslated}
              onToggle={handleToggle}
              disabled={isLoading}
              className={`${buttonFontClass}`}
            />
          </div>
        </main>

        <footer className="container py-10 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Jay Bhamra. Crafted with care and a hint of
            Elvish magic.
          </p>
        </footer>
      </div>
    </motion.div>
  )
}

export default Home
