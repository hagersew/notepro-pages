import type { IconType } from 'react-icons'
import {
  FiBookOpen,
  FiEdit3,
  FiFeather,
  FiGlobe,
  FiShare2,
} from 'react-icons/fi'
import noteproLogo from '../assets/notepro-logo.png'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import gallery5 from '../assets/gallery-5.png'

export const installUrl =
  'https://chromewebstore.google.com/detail/notepro/iooadjjbebjhidaabjjnkkmhbaljckdh'

export const logo = noteproLogo

export const heroPrimary = gallery5
export const heroSecondary = gallery1
export const showcaseImage = gallery4

export const howItWorksSteps = [
  {
    id: 1,
    label: 'Select text on any page',
    description: 'Highlight any passage on a webpage — articles, docs, or blogs.',
    image: gallery1,
    alt: 'Highlight card and save popup in NotePro',
  },
  {
    id: 2,
    label: 'Highlight with color',
    description: 'Pick a color to organize ideas visually as you read.',
    image: gallery2,
    alt: 'Empty state in NotePro sidebar before saving highlights',
  },
  {
    id: 3,
    label: 'Add a note & save',
    description: 'Attach context so you never lose why something mattered.',
    image: gallery3,
    alt: 'Filtered annotations view in NotePro sidebar',
  },
  {
    id: 4,
    label: 'Browse & share from sidebar',
    description: 'Search, filter, and share insights from one clean panel.',
    image: gallery5,
    alt: 'NotePro expanded sidebar with grouped saved highlights',
  },
]

export type Feature = {
  title: string
  description: string
  icon: IconType
  featured?: boolean
}

export const keyFeatures: Feature[] = [
  {
    title: 'Highlight anything',
    description:
      'Select text on any webpage and highlight it using multiple colors to organize your thoughts visually.',
    icon: FiFeather,
    featured: true,
  },
  {
    title: 'Add notes to highlights',
    description:
      'Attach custom notes to any selection so you never lose context or ideas.',
    icon: FiEdit3,
  },
  {
    title: 'Save pages automatically',
    description:
      'Each highlight is saved with its source URL, page title, and timestamp for easy reference.',
    icon: FiGlobe,
  },
  {
    title: 'View all your annotations',
    description:
      'Access your highlights and notes anytime from a clean sidebar. Search, filter, and revisit your ideas effortlessly.',
    icon: FiBookOpen,
  },
  {
    title: 'Share insights',
    description:
      'Share your annotations with others and collaborate by sending meaningful excerpts from the web.',
    icon: FiShare2,
  },
]

export const useCases = [
  'Students highlighting study materials',
  'Developers saving useful code snippets',
  'Researchers collecting references',
  'Creators curating content ideas',
]

export const showcaseBullets = [
  'No more switching between tabs and note apps',
  'Keep ideas in context, right on the page',
  'Simple, fast, and built for everyday use',
]

export const galleryImages = [
  {
    src: gallery1,
    alt: 'Highlight card and save popup in NotePro',
  },
  {
    src: gallery2,
    alt: 'Empty state in NotePro sidebar before saving highlights',
  },
  {
    src: gallery3,
    alt: 'Filtered annotations view in NotePro sidebar',
  },
  {
    src: gallery4,
    alt: 'Lucy Tour Guide page with Open NotePro button',
  },
  {
    src: gallery5,
    alt: 'NotePro expanded sidebar with grouped saved highlights',
  },
]

export function goToInstall() {
  window.open(installUrl, '_blank', 'noopener,noreferrer')
}
