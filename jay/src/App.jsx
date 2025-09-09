import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './output.css'

function Layout({ children, toggleTheme }) {
  return (
    <div className="min-h-screen transition bg-gradient-to-br from-[#fdf6e3] to-[#eee] text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 font-body">
      <nav className="p-4 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
        <Link to="/" className="text-xl font-bold hover:text-indigo-500 transition">Jaspreet Kaur Bhamra</Link>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <Link to="/about" className="hover:text-indigo-500">About</Link>
          <Link to="/projects" className="hover:text-indigo-500">Projects</Link>
          <Link to="/now" className="hover:text-indigo-500">Now</Link>
          <button
            onClick={toggleTheme}
            className="ml-4 px-2 py-1 rounded border border-gray-400 dark:border-gray-600 text-sm hover:bg-indigo-100 dark:hover:bg-gray-700"
          >
            Toggle Theme
          </button>
        </div>
      </nav>
      <main className="p-8">
        {children}
      </main>
      <footer className="text-sm text-center text-gray-500 dark:text-gray-400 py-6">© {new Date().getFullYear()} Jaspreet Kaur Bhamra</footer>
    </div>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

function Home() {
  return (
    <PageWrapper>
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Jaspreet 👋</h1>
      <p className="text-lg max-w-xl">
        Welcome to my little corner of the internet. I'm a data scientist, creative technologist,
        and lifelong learner. This site is a personal playground — part resume, part digital garden.
      </p>
    </PageWrapper>
  )
}

function About() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold mb-2">About Me</h2>
      <p className="max-w-xl">
        I'm passionate about using machine learning to make sense of complex systems — whether it's detecting wildfire smoke,
        mapping roof tiles, or modeling gene expression. But beyond the data, I love writing, reading strange papers, and building things that feel human.
      </p>
    </PageWrapper>
  )
}

function Projects() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold mb-2">Selected Projects</h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>SmokeyNet:</strong> Multimodal wildfire smoke detection using PyTorch Lightning + weather data</li>
        <li><strong>RoofKey:</strong> Roof tile polygon detection for solar panel quoting</li>
        <li><strong>Creyon Bio dashboards:</strong> Interactive visualizations for transcriptomics modeling</li>
      </ul>
    </PageWrapper>
  )
}

function Now() {
  return (
    <PageWrapper>
      <h2 className="text-3xl font-semibold mb-2">Now</h2>
      <p className="max-w-xl italic">
        Currently exploring frontend development and brushing up on React + animations.
        Reading a lot about embodied cognition, and revisiting The Left Hand of Darkness.
        Interviewing for roles, recharging, and rediscovering small joys.
      </p>
    </PageWrapper>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <Router>
      <Layout toggleTheme={toggleTheme} theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
