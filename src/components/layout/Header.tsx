import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { logo } from '../../content/landing'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { StoreButtons } from '../ui/StoreButtons'

const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#gallery', label: 'Gallery' },
  { href: '/privacy-policy.html', label: 'Privacy' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      bg={scrolled ? 'rgba(251, 250, 248, 0.92)' : 'rgba(251, 250, 248, 0.72)'}
      backdropFilter="blur(16px) saturate(1.2)"
      borderBottomWidth="1px"
      borderColor={scrolled ? 'border.default' : 'transparent'}
      boxShadow={scrolled ? 'soft' : 'none'}
      transition="all 0.3s ease"
      py={scrolled ? 2 : 3}
    >
      <Container maxW="7xl">
        <Flex align="center" justify="space-between" gap={4}>
          <HStack gap={3}>
            <Image src={logo} alt="NotePro logo" boxSize="10" borderRadius="full" objectFit="cover" />
            <Text fontWeight="bold" fontSize="lg" letterSpacing="-0.03em" color="fg.default">
              NotePro
            </Text>
          </HStack>

          <HStack gap={8} display={{ base: 'none', md: 'flex' }}>
            {navLinks.map((link) => (
              <ChakraLink
                key={link.href}
                href={link.href}
                fontSize="sm"
                fontWeight="medium"
                color="fg.muted"
                _hover={{ color: 'accent.emphasis' }}
                transition="color 0.2s"
              >
                {link.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack gap={2}>
            <StoreButtons variant="compact" display={{ base: 'none', sm: 'inline-flex' }} />
            <Button
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              variant="ghost"
              color="fg.muted"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </Button>
          </HStack>
        </Flex>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden' }}
          >
            <Container maxW="7xl" pb={4} display={{ md: 'none' }}>
              <Stack gap={3} pt={2}>
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduced ? 0 : i * 0.05 }}
                  >
                    <ChakraLink
                      href={link.href}
                      display="block"
                      py={2}
                      fontWeight="medium"
                      color="fg.default"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </ChakraLink>
                  </motion.div>
                ))}
                <StoreButtons variant="compact" fullWidth mt={2} />
              </Stack>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
