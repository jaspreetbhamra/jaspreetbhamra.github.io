import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaGoogleScholar } from 'react-icons/fa6'
import { HiOutlineMail, HiPhone } from 'react-icons/hi'


import TranslateButton from '../components/TranslateButton.jsx'
import { getBlurb } from '../utils/api.js'

const navLinks = [
  { label: 'Resume', href: '#resume' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
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
        {isTranslated && (
          <div
            className="pointer-events-none absolute inset-0 bg-slate-900/40"
            aria-hidden
          />
        )}

        <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
          {/* Left Sidebar */}
          {/* <aside
            className={`fantasy-page relative flex flex-col items-center gap-6 p-8
              lg:w-1/4 lg:sticky lg:top-0 lg:h-screen
              ${themeClass}
            `}
          > */}
          <aside
            className={`fantasy-page relative flex flex-col items-center gap-6 p-8
              lg:w-1/4 lg:sticky lg:top-0 lg:h-screen
            `}
          >
            {/* Binding divider (book spine illusion) */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-black/30 to-transparent opacity-50" />

            
            <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply sidebar-noise" />
            <div className="pointer-events-none absolute inset-0 sidebar-shadow" />
            {/* Profile Image */}
            <img
              src="src/assets/images/profile.jpeg"
              alt="Profile"
              className="h-36 w-36 rounded-full border-4 border-slate-300 object-cover shadow-lg"
            />

            {/* Name */}
            <h1 className={`text-2xl font-bold ${textColorClass} ${headingFontClass}`}>
              Jaspreet Kaur Bhamra
            </h1>

            {/* Short Blurb */}
            <p className={`text-center text-sm italic ${textColorClass}`}>
              Data Scientist • ML Engineer • Storyteller
            </p>

            {/* Contact Info */}
            <div className="flex w-full flex-col items-center gap-2 border-t border-slate-400/30 pt-4 text-sm">
              <a
                href="mailto:dummy.email@example.com"
                className={`flex items-center gap-2 ${textColorClass} hover:text-sky-500 transition-colors`}
              >
                <HiOutlineMail className="h-4 w-4" />
                dummy.email@example.com
              </a>
              <a
                href="tel:+1234567890"
                className={`flex items-center gap-2 ${textColorClass} hover:text-sky-500 transition-colors`}
              >
                <HiPhone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-3 pt-4 text-center">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors hover:text-sky-500 ${textColorClass}`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Motto / Engraving */}
            <div className="mt-auto w-full pt-4 text-center">
              <p className="engraving text-xs uppercase tracking-[0.4em]">
                Beyond the Binary
              </p>
            </div>
          </aside>


          {/* Main Content */}
          <main className={`fantasy-page flex flex-1 flex-col justify-center gap-10 p-10`}>

            <section className="rounded-3xl border border-transparent bg-transparent shadow-none">
              <div className="relative min-h-[30vh] max-h-[50vh] overflow-y-auto">
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
                    style={{
                      fontFamily: isTranslated
                        ? 'Playfair Display, serif'
                        : 'Tengwar Feanor, serif',
                    }}
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
                  className={`${buttonFontClass} ${textColorClass}`}
                />
              </div>
            </div>

            {/* Nav links (only after translation) */}
            <AnimatePresence>
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
            </AnimatePresence>
          </main>
        </div>

        <footer className="container py-10 text-xs text-slate-500 text-center lg:text-left">
          <p>
            &copy; {new Date().getFullYear()} Jaspreet Kaur Bhamra. Crafted with
            care and a hint of Elvish magic.
          </p>
        </footer>
      </motion.div>
    </div>
    </div>
  )
}

export default Home
