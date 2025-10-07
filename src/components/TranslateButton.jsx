// import PropTypes from 'prop-types'
// import { motion } from 'framer-motion'

// const TranslateButton = ({
//   isTranslated,
//   onToggle,
//   disabled = false,
//   className = '',
// }) => {
//   const label = isTranslated ? 'Return to Elvish' : 'Click here to translate'

//   return (
//     <motion.button
//       type="button"
//       onClick={onToggle}
//       disabled={disabled}
//       whileHover={{ scale: disabled ? 1 : 1.02 }}
//       whileTap={{ scale: disabled ? 1 : 0.98 }}
//       className={`inline-flex items-center gap-3 rounded-full border border-slate-700/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition-colors duration-200 hover:border-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
//     >
//       <span className="block size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
//       {label}
//     </motion.button>
//   )
// }

// TranslateButton.propTypes = {
//   isTranslated: PropTypes.bool.isRequired,
//   onToggle: PropTypes.func.isRequired,
//   disabled: PropTypes.bool,
//   className: PropTypes.string,
// }

// export default TranslateButton


// import { motion } from 'framer-motion'

// const TranslateButton = ({ isTranslated, onToggle, disabled, className }) => {
//   return (
//     <motion.button
//       onClick={onToggle}
//       disabled={disabled}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       animate={{
//         backgroundColor: isTranslated ? '#0f172a' : '#fdf6e3',
//         color: isTranslated ? '#fdf6e3' : '#0f172a',
//         boxShadow: isTranslated
//           ? '0px 0px 12px rgba(173, 216, 230, 0.8)' // bluish glow
//           : '0px 0px 12px rgba(139, 69, 19, 0.6)',  // warm parchment glow
//       }}
//       transition={{ duration: 0.6, ease: 'easeInOut' }}
//       className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider ${className}`}
//     >
//       {isTranslated ? 'Return to Elvish' : 'Click here to Translate'}
//     </motion.button>
//   )
// }

// export default TranslateButton


// import { motion } from 'framer-motion'

// const TranslateButton = ({ isTranslated, onToggle, disabled, className }) => {
//   return (
//     <motion.button
//       onClick={onToggle}
//       disabled={disabled}
//       whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
//       whileTap={{ scale: 0.95 }}
//       animate={{
//         backgroundColor: isTranslated ? '#0f172a' : '#fdf6e3',
//         color: isTranslated ? '#fdf6e3' : '#2c1810',
//         boxShadow: isTranslated
//           ? '0 0 20px rgba(135, 206, 250, 0.8), 0 0 40px rgba(135, 206, 250, 0.6)'
//           : '0 0 15px rgba(222, 184, 135, 0.7), 0 0 30px rgba(205, 133, 63, 0.5)',
//       }}
//       transition={{ duration: 0.6, ease: 'easeInOut' }}
//       className={`rounded-full px-8 py-3 text-sm font-semibold tracking-wider shadow-lg ${className}`}
//     >
//       {isTranslated ? '🔮 Return to the Ancient Tongue' : '✨ Reveal the Hidden Words'}
//     </motion.button>
//   )
// }

// export default TranslateButton



import { motion } from 'framer-motion'

const TranslateButton = ({ isTranslated, onToggle, disabled, className }) => {
  return (
    <motion.button
      onClick={onToggle}
      disabled={disabled}
      whileHover={{
        scale: 1.1,
        boxShadow: isTranslated
          ? '0 0 20px rgba(135, 206, 250, 0.8), 0 0 40px rgba(135, 206, 250, 0.6)'
          : '0 0 15px rgba(222, 184, 135, 0.7), 0 0 30px rgba(205, 133, 63, 0.5)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`rounded-full px-8 py-3 text-sm font-semibold tracking-wider shadow-md ${className}`}
    >
      {isTranslated ? '🔮 Return to the Ancient Tongue' : '✨ Reveal the Hidden Words'}
    </motion.button>
  )
}

export default TranslateButton


