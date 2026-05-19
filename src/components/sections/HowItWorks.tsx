import { Box, Card, Container, Flex, Grid, Image, Stack, Text } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { howItWorksSteps } from '../../content/landing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { FadeIn, StaggerChildren, StaggerItem } from '../motion'
import { SectionHeader } from '../ui/SectionHeader'

const AUTO_ADVANCE_MS = 5000

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()

  const goToStep = useCallback((index: number) => {
    setActiveIndex(index % howItWorksSteps.length)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % howItWorksSteps.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearInterval(id)
  }, [paused, reduced])

  const activeStep = howItWorksSteps[activeIndex]

  return (
    <Box
      id="how-it-works"
      className="section-dots"
      py={{ base: 16, md: 24 }}
      borderTopWidth="1px"
      borderColor="border.default"
    >
      <Container maxW="7xl">
        <Box mb={{ base: 10, md: 14 }}>
        <FadeIn>
          <SectionHeader
            eyebrow="How it works"
            title="From selection to insight in four steps"
            description="See how NotePro fits into your browsing flow — no tab switching, no lost context."
            align="center"
          />
        </FadeIn>
        </Box>

        <Box
          display={{ base: 'none', lg: 'block' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Grid templateColumns="0.9fr 1.1fr" gap={12} alignItems="start">
            <Stack gap={0} position="relative">
              <Box
                position="absolute"
                left="19px"
                top="24px"
                bottom="24px"
                w="2px"
                bg="ink.100"
                borderRadius="full"
              />
              <motion.div
                style={{
                  position: 'absolute',
                  left: 19,
                  top: 24,
                  width: 2,
                  height: `${((activeIndex + 1) / howItWorksSteps.length) * 100}%`,
                  maxHeight: 'calc(100% - 48px)',
                  background: 'var(--np-brand-600)',
                  borderRadius: 9999,
                  originY: 0,
                }}
                layout
                transition={{ duration: reduced ? 0 : 0.4 }}
              />

              {howItWorksSteps.map((step, index) => {
                const isActive = index === activeIndex
                return (
                  <Flex
                    key={step.id}
                    gap={4}
                    py={5}
                    cursor="pointer"
                    onClick={() => goToStep(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') goToStep(index)
                    }}
                    opacity={isActive ? 1 : 0.55}
                    transition="opacity 0.3s"
                    _hover={{ opacity: 1 }}
                  >
                    <Flex
                      align="center"
                      justify="center"
                      boxSize="10"
                      borderRadius="full"
                      bg={isActive ? 'accent.default' : 'bg.elevated'}
                      color={isActive ? 'white' : 'fg.muted'}
                      borderWidth="2px"
                      borderColor={isActive ? 'accent.default' : 'ink.200'}
                      fontWeight="bold"
                      fontSize="sm"
                      flexShrink={0}
                      zIndex={1}
                      transition="all 0.3s"
                      transform={isActive ? 'scale(1.08)' : 'scale(1)'}
                    >
                      {step.id}
                    </Flex>
                    <Stack gap={1}>
                      <Text fontWeight="semibold" fontSize="lg" color={isActive ? 'fg.default' : 'fg.muted'}>
                        {step.label}
                      </Text>
                      <Text color="fg.muted" fontSize="sm" display={isActive ? 'block' : 'none'}>
                        {step.description}
                      </Text>
                    </Stack>
                  </Flex>
                )
              })}
            </Stack>

            <Card.Root overflow="hidden" borderRadius="2xl" shadow="glow" borderWidth="1px" borderColor="border.emphasis">
              <Box position="relative" aspectRatio="16/10" bg="bg.sectionAlt">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
                    initial={reduced ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduced ? undefined : { opacity: 0, x: -16 }}
                    transition={{ duration: reduced ? 0 : 0.35 }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image
                      src={activeStep.image}
                      alt={activeStep.alt}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Card.Root>
          </Grid>
        </Box>

        <Box display={{ base: 'block', lg: 'none' }}>
          <StaggerChildren>
            {howItWorksSteps.map((step, index) => {
              const isActive = index === activeIndex
              return (
                <StaggerItem key={step.id}>
                  <Box
                    mb={4}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={isActive ? 'border.emphasis' : 'border.default'}
                    overflow="hidden"
                    bg="bg.elevated"
                    shadow={isActive ? 'soft' : 'none'}
                    transition="all 0.3s"
                    onClick={() => goToStep(index)}
                    cursor="pointer"
                  >
                    <Flex p={4} gap={3} align="center">
                      <Flex
                        boxSize="8"
                        borderRadius="full"
                        bg={isActive ? 'accent.default' : 'ink.100'}
                        color={isActive ? 'white' : 'fg.muted'}
                        align="center"
                        justify="center"
                        fontWeight="bold"
                        fontSize="sm"
                        flexShrink={0}
                      >
                        {step.id}
                      </Flex>
                      <Text fontWeight="semibold">{step.label}</Text>
                    </Flex>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={reduced ? undefined : { height: 0, opacity: 0 }}
                        >
                          <Box px={4} pb={4}>
                            <Text color="fg.muted" fontSize="sm" mb={3}>
                              {step.description}
                            </Text>
                            <Image
                              src={step.image}
                              alt={step.alt}
                              borderRadius="lg"
                              w="100%"
                            />
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Box>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </Box>
      </Container>
    </Box>
  )
}
