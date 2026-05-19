import { createSystem, defaultConfig } from '@chakra-ui/react'
import { brand, highlight, ink, surfaces } from './brand-colors'

const toColorTokens = (palette: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(palette).map(([shade, value]) => [shade, { value }]),
  )

export const noteProSystem = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: '"Plus Jakarta Sans", system-ui, sans-serif' },
        body: { value: '"Plus Jakarta Sans", system-ui, sans-serif' },
      },
      radii: {
        '2xl': { value: '1rem' },
        '3xl': { value: '1.25rem' },
        '4xl': { value: '1.5rem' },
      },
      shadows: {
        soft: { value: '0 2px 20px -2px rgba(28, 25, 23, 0.06)' },
        card: { value: '0 12px 40px -12px rgba(28, 25, 23, 0.1)' },
        elevated: { value: '0 24px 56px -16px rgba(79, 70, 229, 0.18)' },
        glow: { value: '0 0 0 1px rgba(79, 70, 229, 0.08), 0 8px 32px -8px rgba(79, 70, 229, 0.2)' },
      },
      colors: {
        brand: toColorTokens(brand),
        ink: toColorTokens(ink),
        highlight: toColorTokens(highlight),
        surface: { value: surfaces.page },
        surfaceMuted: { value: surfaces.muted },
        surfaceCard: { value: surfaces.card },
        surfaceAlt: { value: surfaces.alt },
      },
    },
    semanticTokens: {
      colors: {
        page: { value: '{colors.surface}' },
        'fg.default': { value: '{colors.ink.900}' },
        'fg.muted': { value: '{colors.ink.600}' },
        'fg.subtle': { value: '{colors.ink.500}' },
        'accent.default': { value: '{colors.brand.600}' },
        'accent.emphasis': { value: '{colors.brand.700}' },
        'accent.muted': { value: '{colors.brand.50}' },
        'accent.subtle': { value: '{colors.brand.100}' },
        'border.default': { value: 'rgba(28, 25, 23, 0.08)' },
        'border.emphasis': { value: '{colors.brand.200}' },
        'bg.elevated': { value: '{colors.surfaceCard}' },
        'bg.section': { value: '{colors.surfaceMuted}' },
        'bg.sectionAlt': { value: '{colors.surfaceAlt}' },
      },
    },
  },
  globalCss: {
    body: {
      fontFamily: 'body',
      bg: 'page',
      color: 'fg.default',
    },
    '::selection': {
      bg: '{colors.brand.100}',
      color: '{colors.brand.900}',
    },
  },
})
