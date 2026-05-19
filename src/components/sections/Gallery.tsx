import { Box, Button, Card, Container, Flex, HStack, Image } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { galleryImages } from '../../content/landing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { FadeIn } from '../motion'
import { SectionHeader } from '../ui/SectionHeader'

const brandActive = '#4f46e5'
const brandInactive = '#d6d3d1'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const reduced = useReducedMotion()
  const total = galleryImages.length

  const goTo = (index: number) => {
    setActiveIndex((index + total) % total)
  }

  const active = galleryImages[activeIndex]

  return (
    <Box
      bg="bg.sectionAlt"
      py={{ base: 16, md: 24 }}
      borderTopWidth="1px"
      borderColor="border.default"
    >
      <Container maxW="7xl">
        <Box mb={10}>
        <FadeIn>
          <SectionHeader
            eyebrow="Product gallery"
            title="See NotePro in action"
            description="From your first highlight to managing saved annotations — explore real workflows across different pages."
          />
        </FadeIn>
        </Box>

        <Box position="relative">
          <Card.Root
            overflow="hidden"
            borderRadius="2xl"
            shadow="card"
            borderWidth="1px"
            borderColor="border.default"
            bg="bg.elevated"
          >
            <Box position="relative" aspectRatio={{ base: '4/3', md: '16/9' }} bg="bg.section">
              <AnimatePresence mode="wait" custom={activeIndex}>
                <motion.div
                  key={activeIndex}
                  custom={activeIndex}
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduced ? undefined : { opacity: 0, x: -24 }}
                  transition={{ duration: reduced ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image src={active.src} alt={active.alt} w="100%" h="100%" objectFit="contain" p={2} />
                </motion.div>
              </AnimatePresence>
            </Box>
          </Card.Root>

          <Button
            aria-label="Show previous gallery image"
            onClick={() => goTo(activeIndex - 1)}
            position="absolute"
            left={3}
            top="50%"
            transform="translateY(-50%)"
            rounded="full"
            size="sm"
            bg="brand.600"
            color="white"
            _hover={{ bg: 'brand.700' }}
          >
            <FiChevronLeft />
          </Button>
          <Button
            aria-label="Show next gallery image"
            onClick={() => goTo(activeIndex + 1)}
            position="absolute"
            right={3}
            top="50%"
            transform="translateY(-50%)"
            rounded="full"
            size="sm"
            bg="brand.600"
            color="white"
            _hover={{ bg: 'brand.700' }}
          >
            <FiChevronRight />
          </Button>
        </Box>

        <HStack justify="center" gap={2} mt={5}>
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.alt}
              aria-label={`Go to gallery image ${index + 1}`}
              onClick={() => goTo(index)}
              layout
              style={{
                height: 8,
                borderRadius: 9999,
                border: 'none',
                cursor: 'pointer',
                background: index === activeIndex ? brandActive : brandInactive,
                width: index === activeIndex ? 32 : 8,
                transition: 'background 0.2s',
              }}
            />
          ))}
        </HStack>

        <Flex gap={3} mt={6} overflowX="auto" pb={2} justify={{ base: 'start', md: 'center' }}>
          {galleryImages.map((image, index) => (
            <Box
              key={image.alt}
              as="button"
              flexShrink={0}
              w="20"
              h="14"
              borderRadius="lg"
              overflow="hidden"
              borderWidth="2px"
              borderColor={index === activeIndex ? 'accent.default' : 'ink.200'}
              opacity={index === activeIndex ? 1 : 0.7}
              transition="all 0.2s"
              onClick={() => goTo(index)}
              _hover={{ opacity: 1, borderColor: 'brand.400' }}
            >
              <Image src={image.src} alt="" w="100%" h="100%" objectFit="cover" />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
