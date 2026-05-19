import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { goToInstall, heroPrimary, heroSecondary } from '../../content/landing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { PrimaryButton } from '../ui/PrimaryButton'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 40])

  const items = [
    { delay: 0, content: 'badge' },
    { delay: 0.1, content: 'heading' },
    { delay: 0.2, content: 'text' },
    { delay: 0.3, content: 'cta' },
    { delay: 0.4, content: 'sub' },
  ]

  return (
    <Box
      ref={ref}
      className="grain hero-mesh"
      position="relative"
      overflow="hidden"
      borderBottomWidth="1px"
      borderColor="border.default"
    >
      <Container maxW="7xl" py={{ base: 16, md: 28 }} position="relative" zIndex={2}>
        <Grid templateColumns={{ base: '1fr', lg: '1.05fr 0.95fr' }} gap={12} alignItems="center">
          <Stack gap={6}>
            {items.map((item) => (
              <motion.div
                key={item.content}
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: easeOut, delay: reduced ? 0 : item.delay }}
              >
                {item.content === 'badge' && (
                  <Box className="hero-badge" w="fit-content">
                    <span className="hero-badge-dot" aria-hidden />
                    Highlight, annotate & share the web
                  </Box>
                )}
                {item.content === 'heading' && (
                  <Heading
                    as="h1"
                    fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                    lineHeight="1.05"
                    letterSpacing="-0.03em"
                    fontWeight="extrabold"
                    color="fg.default"
                  >
                    Capture ideas{' '}
                    <Box as="span" color="accent.default">
                      directly
                    </Box>{' '}
                    where they happen.
                  </Heading>
                )}
                {item.content === 'text' && (
                  <Text fontSize={{ base: 'lg', md: 'xl' }} color="fg.muted" maxW="2xl" lineHeight="1.6">
                    Highlight, annotate & save notes on any webpage. Organize ideas and share insights
                    with ease.
                  </Text>
                )}
                {item.content === 'cta' && (
                  <HStack gap={4} flexWrap="wrap">
                    <PrimaryButton onClick={goToInstall} size="lg" px={8}>
                      Download Extension
                    </PrimaryButton>
                    <Link
                      href="#how-it-works"
                      fontWeight="semibold"
                      color="accent.emphasis"
                      fontSize="md"
                      _hover={{ color: 'brand.800', textDecoration: 'underline' }}
                    >
                      See how it works →
                    </Link>
                  </HStack>
                )}
                {item.content === 'sub' && (
                  <Text fontSize="sm" color="fg.subtle">
                    Perfect for research, learning, and content curation.
                  </Text>
                )}
              </motion.div>
            ))}
          </Stack>

          <Box
            w="full"
            position="relative"
            maxW={{ base: '100%', md: '440px' }}
            justifySelf={{ base: 'center', lg: 'end' }}
            minH={{ base: '280px', md: '360px' }}
          >
            <motion.div style={{ y: imageY }}>
              <motion.div
                animate={reduced ? undefined : { y: [0, -8, 0] }}
                transition={
                  reduced
                    ? undefined
                    : { duration: 5, repeat: Infinity, ease: 'easeInOut' }
                }
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  maxWidth: '260px',
                  width: '75%',
                  zIndex: 1,
                }}
              >
                <Card.Root shadow="glow" borderRadius="2xl" overflow="hidden" bg="bg.elevated">
                  <Image
                    src={heroPrimary}
                    alt="NotePro sidebar showing saved highlights"
                    w="100%"
                    objectFit="cover"
                  />
                </Card.Root>
              </motion.div>

              <motion.div
                animate={reduced ? undefined : { y: [0, 8, 0] }}
                transition={
                  reduced
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }
                }
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  maxWidth: '290px',
                  width: '80%',
                  zIndex: 2,
                }}
              >
                <Card.Root
                  shadow="elevated"
                  borderRadius="2xl"
                  overflow="hidden"
                  borderWidth="2px"
                  borderColor="white"
                  bg="bg.elevated"
                >
                  <Image
                    src={heroSecondary}
                    alt="NotePro highlight popup with color and note options"
                    w="100%"
                    objectFit="cover"
                  />
                </Card.Root>
              </motion.div>
            </motion.div>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
