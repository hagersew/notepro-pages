import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { logo } from '../../content/landing'
import { FadeIn } from '../motion'

export function Footer() {
  return (
    <FadeIn>
      <Box bg="ink.900" color="white" py={10}>
        <Container maxW="7xl">
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
            align={{ base: 'start', md: 'center' }}
            gap={6}
          >
            <HStack gap={3}>
              <Image src={logo} alt="NotePro logo" boxSize="10" borderRadius="full" objectFit="cover" />
              <Text fontWeight="bold" letterSpacing="-0.02em">
                NotePro
              </Text>
            </HStack>
            <Text color="whiteAlpha.700" fontSize="sm" maxW="xs">
              Highlight, annotate, and share the web.
            </Text>
            <HStack gap={5}>
              <ChakraLink
                href="/privacy-policy.html"
                color="brand.300"
                fontWeight="medium"
                fontSize="sm"
                _hover={{ color: 'white' }}
              >
                Privacy Policy
              </ChakraLink>
              <ChakraLink
                href="https://hagersew.com"
                target="_blank"
                rel="noopener noreferrer"
                color="brand.300"
                display="inline-flex"
                alignItems="center"
                gap={1}
                fontWeight="medium"
                fontSize="sm"
                _hover={{ color: 'white' }}
              >
                Powered by Hagersew <FiExternalLink />
              </ChakraLink>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </FadeIn>
  )
}
