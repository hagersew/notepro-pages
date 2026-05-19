import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import {
  defaultViewport,
  fadeUpVariants,
  staggerContainerVariants,
} from './motion-variants'

const easeOut = [0.22, 1, 0.36, 1] as const

type FadeInProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0, ...rest }: FadeInProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={defaultViewport}
      variants={fadeUpVariants}
      transition={{ duration: reduced ? 0 : 0.5, ease: easeOut, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerChildrenProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode
}

export function StaggerChildren({ children, ...rest }: StaggerChildrenProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : 'hidden'}
      whileInView={reduced ? undefined : 'visible'}
      viewport={defaultViewport}
      variants={staggerContainerVariants}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

type StaggerItemProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode
}

export function StaggerItem({ children, ...rest }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUpVariants} {...rest}>
      {children}
    </motion.div>
  )
}

type ScaleOnHoverProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  children: ReactNode
}

export function ScaleOnHover({ children, ...rest }: ScaleOnHoverProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      style={{ height: '100%' }}
      whileHover={reduced ? undefined : { y: -4 }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
