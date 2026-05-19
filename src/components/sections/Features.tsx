import { Box, Card, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { keyFeatures } from '../../content/landing'
import { FadeIn, ScaleOnHover, StaggerChildren, StaggerItem } from '../motion'
import { SectionHeader } from '../ui/SectionHeader'

export function Features() {
  const [featured, ...rest] = keyFeatures

  return (
    <Box id="features" bg="bg.section" py={{ base: 16, md: 24 }}>
      <Container maxW="7xl">
        <Box mb={{ base: 10, md: 14 }}>
        <FadeIn>
          <SectionHeader
            eyebrow="Features"
            title="Why NotePro?"
            description="NotePro transforms the way you interact with the web. Instead of copying content into separate apps, you can highlight text directly on any webpage, add your own notes, and keep everything organized in one place."
          />
        </FadeIn>
        </Box>

        <StaggerChildren>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={5}
            templateRows={{ lg: 'auto auto' }}
          >
            <Box gridColumn={{ base: 'span 1', lg: 'span 2' }}>
              <StaggerItem style={{ height: '100%' }}>
                <FeatureCard feature={featured} large />
              </StaggerItem>
            </Box>
            {rest.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard feature={feature} />
              </StaggerItem>
            ))}
          </Grid>
        </StaggerChildren>
      </Container>
    </Box>
  )
}

type FeatureCardProps = {
  feature: (typeof keyFeatures)[0]
  large?: boolean
}

function FeatureCard({ feature, large }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <ScaleOnHover>
      <Card.Root className="feature-card" h="full" borderRadius="2xl" bg="bg.elevated">
        <Card.Body p={{ base: 6, md: large ? 8 : 6 }}>
          <VStack align="start" gap={4} h="full">
            <Box className="feature-icon" fontSize={large ? '2xl' : 'xl'}>
              <Icon />
            </Box>
            <Heading size={large ? 'lg' : 'md'} letterSpacing="-0.02em" color="fg.default">
              {feature.title}
            </Heading>
            <Text color="fg.muted" lineHeight="1.65" fontSize={large ? 'md' : 'sm'}>
              {feature.description}
            </Text>
          </VStack>
        </Card.Body>
      </Card.Root>
    </ScaleOnHover>
  )
}
