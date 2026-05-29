import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { FadeIn } from '../motion'
import { StoreButtons } from '../ui/StoreButtons'

export function FinalCTA() {
  return (
    <Box className="cta-band" py={{ base: 16, md: 22 }} position="relative">
      <Container maxW="3xl" position="relative" zIndex={1}>
        <FadeIn>
          <Stack gap={6} textAlign="center" align="center">
            <Heading
              size={{ base: 'xl', md: '2xl' }}
              letterSpacing="-0.03em"
              color="white"
              fontWeight="bold"
            >
              Ready to capture the web your way?
            </Heading>
            <Text color="whiteAlpha.800" fontSize="lg" maxW="xl" lineHeight="1.65">
              Install NotePro free for Chrome or Firefox and start highlighting in seconds.
            </Text>
            <Box className="pulse-ring" display="inline-block" borderRadius="lg">
              <StoreButtons variant="inverted" />
            </Box>
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  )
}
