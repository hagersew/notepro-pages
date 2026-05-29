import { Box, Container, Flex, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { useCases } from '../../content/landing'
import { FadeIn, StaggerChildren, StaggerItem } from '../motion'
import { StoreButtons } from '../ui/StoreButtons'
import { SectionHeader } from '../ui/SectionHeader'

export function UseCases() {
  return (
    <Box bg="page" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={10} alignItems="center">
          <FadeIn>
            <Stack gap={6}>
              <SectionHeader
                eyebrow="Use cases"
                title="Made for how you work"
              />
              <StaggerChildren>
                <Flex gap={3} flexWrap="wrap">
                  {useCases.map((useCase) => (
                    <StaggerItem key={useCase}>
                      <Box className="pill-chip">{useCase}</Box>
                    </StaggerItem>
                  ))}
                </Flex>
              </StaggerChildren>
            </Stack>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Box className="gradient-border">
              <Box className="gradient-border-inner" p={{ base: 6, md: 8 }}>
                <Stack gap={5}>
                  <Heading size="lg" letterSpacing="-0.02em" color="fg.default">
                    Start capturing web insights with NotePro
                  </Heading>
                  <Text color="fg.muted" lineHeight="1.65">
                    Turn any webpage into your notes—highlight text, add comments, and share what
                    matters.
                  </Text>
                  <Flex gap={3} flexWrap="wrap">
                    <StoreButtons />
                  </Flex>
                </Stack>
              </Box>
            </Box>
          </FadeIn>
        </Grid>
      </Container>
    </Box>
  )
}
