import { useState } from 'react'

const LANGUAGE_OPTIONS = ['English', 'Punjabi']

const TranslateButton = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = () => {
    setActiveIndex((prev) => (prev + 1) % LANGUAGE_OPTIONS.length)
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-sm font-medium text-slate-100 ring-1 ring-slate-600/40 transition hover:bg-slate-700/80 hover:text-white"
    >
      <span className="size-2 rounded-full bg-emerald-400" />
      {LANGUAGE_OPTIONS[activeIndex]}
    </button>
  )
}

export default TranslateButton
