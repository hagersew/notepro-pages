import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import { goToInstall } from '../../content/landing'
import { FadeIn } from '../motion'
import { PrimaryButton } from '../ui/PrimaryButton'

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
              Install NotePro free from the Chrome Web Store and start highlighting in seconds.
            </Text>
            <Box className="pulse-ring" display="inline-block" borderRadius="lg">
              <PrimaryButton
                onClick={goToInstall}
                size="lg"
                px={10}
                bg="white"
                color="brand.700"
                _hover={{ bg: 'brand.50', color: 'brand.800' }}
              >
                Get NotePro for Chrome
              </PrimaryButton>
            </Box>
          </Stack>
        </FadeIn>
      </Container>
    </Box>
  )
}
