import { Box, Container, Grid, Image, Stack } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiCheck } from 'react-icons/fi'
import { showcaseBullets, showcaseImage } from '../../content/landing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { FadeIn, StaggerChildren, StaggerItem } from '../motion'
import { SectionHeader } from '../ui/SectionHeader'

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -30])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.96, 1])

  return (
    <Box
      id="gallery"
      bg="bg.elevated"
      py={{ base: 16, md: 24 }}
      borderTopWidth="1px"
      borderColor="border.default"
    >
      <Container maxW="7xl" ref={ref}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1.1fr' }} gap={12} alignItems="center">
          <FadeIn>
            <Stack gap={6}>
              <SectionHeader
                eyebrow="Built for research"
                title="Built for everyday web research"
                description="Whether you're researching, learning, or collecting ideas, NotePro helps you capture insights exactly where they happen."
              />
              <StaggerChildren>
                <Stack gap={3}>
                  {showcaseBullets.map((bullet) => (
                    <StaggerItem key={bullet}>
                      <Box display="flex" gap={3} alignItems="start">
                        <Box className="feature-icon" mt={0.5} p={1.5} fontSize="sm" flexShrink={0}>
                          <FiCheck size={14} />
                        </Box>
                        <Box as="span" color="fg.default" fontWeight="medium">
                          {bullet}
                        </Box>
                      </Box>
                    </StaggerItem>
                  ))}
                </Stack>
              </StaggerChildren>
            </Stack>
          </FadeIn>

          <FadeIn delay={0.15}>
            <motion.div style={{ y: imageY, scale: imageScale }}>
              <Box className="browser-frame">
                <Box className="browser-chrome">
                  <span className="browser-dot" style={{ background: '#fca5a5' }} />
                  <span className="browser-dot" style={{ background: '#fcd34d' }} />
                  <span className="browser-dot" style={{ background: '#86efac' }} />
                </Box>
                <Image
                  src={showcaseImage}
                  alt="NotePro extension in action on a webpage"
                  w="100%"
                  display="block"
                />
              </Box>
            </motion.div>
          </FadeIn>
        </Grid>
      </Container>
    </Box>
  )
}
