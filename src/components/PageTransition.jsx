import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../utils/motion'

export default function PageTransition({ children }) {
  const reduce = false
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      className="outline-none"
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.main>
  )
}
