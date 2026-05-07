import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  List,
  Separator,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiEdit3,
  FiExternalLink,
  FiGlobe,
  FiFeather,
  FiShare2,
} from 'react-icons/fi'
import logo from './assets/notepro-logo.png'
import noteproShowcase from './assets/notepro-showcase.png'
import heroRightUpdated from './assets/hero-right-updated.png'
import heroRightSecondary from './assets/hero-right-secondary.png'
import gallery1 from './assets/gallery-1.png'
import gallery2 from './assets/gallery-2.png'
import gallery3 from './assets/gallery-3.png'
import gallery4 from './assets/gallery-4.png'
import gallery5 from './assets/gallery-5.png'

const keyFeatures = [
  {
    title: 'Highlight anything',
    description:
      'Select text on any webpage and highlight it using multiple colors to organize your thoughts visually.',
    icon: FiFeather,
  },
  {
    title: 'Add notes to highlights',
    description:
      'Attach custom notes to any selection so you never lose context or ideas.',
    icon: FiEdit3,
  },
  {
    title: 'Save pages automatically',
    description:
      'Each highlight is saved with its source URL, page title, and timestamp for easy reference.',
    icon: FiGlobe,
  },
  {
    title: 'View all your annotations',
    description:
      'Access your highlights and notes anytime from a clean sidebar. Search, filter, and revisit your ideas effortlessly.',
    icon: FiBookOpen,
  },
  {
    title: 'Share insights',
    description:
      'Share your annotations with others and collaborate by sending meaningful excerpts from the web.',
    icon: FiShare2,
  },
]

const useCases = [
  'Students highlighting study materials',
  'Developers saving useful code snippets',
  'Researchers collecting references',
  'Creators curating content ideas',
]

const galleryImages = [
  {
    src: gallery1,
    alt: 'Highlight card and save popup in NotePro',
  },
  {
    src: gallery2,
    alt: 'Empty state in NotePro sidebar before saving highlights',
  },
  {
    src: gallery3,
    alt: 'Filtered annotations view in NotePro sidebar',
  },
  {
    src: gallery4,
    alt: 'Lucy Tour Guide page with Open NotePro button',
  },
  {
    src: gallery5,
    alt: 'NotePro expanded sidebar with grouped saved highlights',
  },
]

const installUrl =
  'https://chromewebstore.google.com/detail/notepro/iooadjjbebjhidaabjjnkkmhbaljckdh'

function LandingPage() {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const totalGalleryImages = galleryImages.length

  const goToPreviousSlide = () => {
    setActiveGalleryIndex((prevIndex) => (prevIndex - 1 + totalGalleryImages) % totalGalleryImages)
  }

  const goToNextSlide = () => {
    setActiveGalleryIndex((prevIndex) => (prevIndex + 1) % totalGalleryImages)
  }

  const goToInstall = () => {
    window.open(installUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box bg="gray.50" color="gray.800">
      <Box bg="white" borderBottomWidth="1px" borderColor="gray.200" position="sticky" top={0} zIndex={10}>
        <Container maxW="7xl" py={3}>
          <Flex align="center" justify="space-between" gap={4}>
            <HStack gap={3}>
              <Image src={logo} alt="NotePro logo" boxSize="14" borderRadius="full" />
              <Text fontWeight="bold" fontSize="xl">
                NotePro
              </Text>
            </HStack>

            <HStack gap={6} display={{ base: 'none', md: 'flex' }}>
              <ChakraLink href="#features" color="gray.600" _hover={{ color: 'blue.600' }}>
                Features
              </ChakraLink>
              <ChakraLink href="#gallery" color="gray.600" _hover={{ color: 'blue.600' }}>
                Gallery
              </ChakraLink>
              <ChakraLink href="/privacy-policy.html" color="gray.600" _hover={{ color: 'blue.600' }}>
                Privacy
              </ChakraLink>
            </HStack>

            <Button onClick={goToInstall} size="sm" colorPalette="blue">
              Download Extension
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box
        bgGradient="linear(to-b, blue.50, white)"
        borderBottomWidth="1px"
        borderColor="gray.200"
      >
        <Container maxW="7xl" py={{ base: 16, md: 24 }}>
          <Grid templateColumns={{ base: '1fr', lg: '1.1fr 0.9fr' }} gap={10} alignItems="center">
            <Stack gap={6}>
              <Text
                w="fit-content"
                px={3}
                py={1}
                borderRadius="full"
                bg="blue.100"
                color="blue.700"
                fontWeight="semibold"
                fontSize="sm"
              >
                <Text as="span" fontSize="lg" fontWeight="extrabold" letterSpacing="tight">
                  NotePro
                </Text>{' '}
                - Highlight, annotate & share the web
              </Text>
              <Heading as="h1" size={{ base: '4xl', md: '5xl' }} lineHeight="1.1">
                Capture ideas directly where they happen.
              </Heading>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="2xl">
                Highlight, annotate & save notes on any webpage. Organize ideas and share insights
                with ease.
              </Text>
              <HStack gap={3} flexWrap="wrap">
                <Button onClick={goToInstall} size="lg" colorPalette="blue">
                  Download Extension
                </Button>
              </HStack>
              <Text fontSize="sm" color="gray.500">
                Perfect for research, learning, and content curation.
              </Text>
            </Stack>

            <Box
              w="full"
              position="relative"
              maxW={{ base: '100%', md: '420px' }}
              justifySelf={{ base: 'center', lg: 'end' }}
              pt={{ base: 0, md: 12 }}
              pb={{ base: 0, md: 6 }}
            >
              <Card.Root shadow="xl" borderRadius="2xl" overflow="hidden" maxW={{ base: '100%', md: '260px' }}>
                <Image
                  src={heroRightUpdated}
                  alt="NotePro sidebar showing saved highlights"
                  w="100%"
                  objectFit="cover"
                />
              </Card.Root>

              <Card.Root
                shadow="2xl"
                borderRadius="2xl"
                overflow="hidden"
                maxW={{ base: '100%', md: '290px' }}
                mt={{ base: 3, md: 0 }}
                ml={{ base: 0, md: 24 }}
                position={{ base: 'relative', md: 'absolute' }}
                top={{ base: 'auto', md: 0 }}
                right={{ base: 'auto', md: 0 }}
                borderWidth="1px"
                borderColor="whiteAlpha.700"
                bg="white"
              >
                <Image
                  src={heroRightSecondary}
                  alt="NotePro highlight popup with color and note options"
                  w="100%"
                  objectFit="cover"
                />
              </Card.Root>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container id="features" maxW="7xl" py={{ base: 14, md: 20 }}>
        <Stack gap={6} mb={10}>
          <Heading size="2xl">Why NotePro?</Heading>
          <Text color="gray.600" maxW="3xl" fontSize="lg">
            NotePro transforms the way you interact with the web. Instead of copying content into
            separate apps, you can highlight text directly on any webpage, add your own notes, and
            keep everything organized in one place.
          </Text>
        </Stack>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          {keyFeatures.map((feature) => (
            <Card.Root key={feature.title} borderRadius="xl" shadow="sm">
              <Card.Body>
                <VStack align="start" gap={3}>
                  <Box
                    p={2}
                    borderRadius="md"
                    bg="blue.50"
                    color="blue.600"
                    fontSize="xl"
                  >
                    <feature.icon />
                  </Box>
                  <Heading size="md">{feature.title}</Heading>
                  <Text color="gray.600">{feature.description}</Text>
                </VStack>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Container>

      <Box id="gallery" bg="white" py={{ base: 14, md: 20 }} borderTopWidth="1px" borderColor="gray.200">
        <Container maxW="7xl">
          <Grid templateColumns={{ base: '1fr', lg: '1.2fr 0.8fr' }} gap={10} alignItems="center">
            <Card.Root overflow="hidden" borderRadius="2xl" shadow="lg">
              <Image src={noteproShowcase} alt="NotePro extension in action on a webpage" />
            </Card.Root>

            <Stack gap={5}>
              <Heading size="2xl">Built for everyday web research</Heading>
              <Text color="gray.600" fontSize="lg">
                Whether you're researching, learning, or collecting ideas, NotePro helps you
                capture insights exactly where they happen.
              </Text>
              <List.Root gap={3}>
                <List.Item>No more switching between tabs and note apps</List.Item>
                <List.Item>Keep ideas in context, right on the page</List.Item>
                <List.Item>Simple, fast, and built for everyday use</List.Item>
              </List.Root>
            </Stack>
          </Grid>
        </Container>
      </Box>

      <Container maxW="7xl" py={{ base: 14, md: 20 }}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>
          <Box>
            <Heading size="xl" mb={4}>
              Use Cases
            </Heading>
            <List.Root gap={3} color="gray.700">
              {useCases.map((useCase) => (
                <List.Item key={useCase}>{useCase}</List.Item>
              ))}
            </List.Root>
          </Box>

          <Card.Root bg="blue.600" color="white" borderRadius="xl" shadow="md">
            <Card.Body>
              <Stack gap={4}>
                <Heading size="lg">Start capturing web insights with NotePro</Heading>
                <Text color="blue.100">
                  Turn any webpage into your notes—highlight text, add comments, and share what
                  matters.
                </Text>
                <Flex gap={3} flexWrap="wrap">
                  <Button onClick={goToInstall} bg="white" color="blue.700" _hover={{ bg: 'blue.100' }}>
                    Install NotePro
                  </Button>
                  <Button variant="outline" borderColor="blue.300" color="white">
                    Contact Team
                  </Button>
                </Flex>
              </Stack>
            </Card.Body>
          </Card.Root>
        </Grid>
      </Container>

      <Box bg="white" py={{ base: 14, md: 20 }} borderTopWidth="1px" borderColor="gray.200">
        <Container maxW="7xl">
          <Stack gap={4} mb={8}>
            <Heading size="2xl">Product Gallery</Heading>
            <Text color="gray.600" maxW="3xl">
              See how NotePro behaves across different pages and workflows, from creating your first
              highlight to managing saved annotations.
            </Text>
          </Stack>

          <Stack gap={5}>
            <Box position="relative">
              <Card.Root overflow="hidden" borderRadius="xl" shadow="md">
                <Flex
                  w={`${totalGalleryImages * 100}%`}
                  transform={`translateX(-${activeGalleryIndex * (100 / totalGalleryImages)}%)`}
                  transition="transform 0.35s ease"
                >
                  {galleryImages.map((image) => (
                    <Box key={image.alt} w={`${100 / totalGalleryImages}%`} flexShrink={0}>
                      <Image src={image.src} alt={image.alt} objectFit="cover" w="100%" />
                    </Box>
                  ))}
                </Flex>
              </Card.Root>

              <Button
                aria-label="Show previous gallery image"
                onClick={goToPreviousSlide}
                position="absolute"
                left={3}
                top="50%"
                transform="translateY(-50%)"
                rounded="full"
                size="sm"
                bg="blackAlpha.700"
                color="white"
                _hover={{ bg: 'blackAlpha.800' }}
                _active={{ bg: 'blackAlpha.900' }}
              >
                <FiChevronLeft />
              </Button>
              <Button
                aria-label="Show next gallery image"
                onClick={goToNextSlide}
                position="absolute"
                right={3}
                top="50%"
                transform="translateY(-50%)"
                rounded="full"
                size="sm"
                bg="blackAlpha.700"
                color="white"
                _hover={{ bg: 'blackAlpha.800' }}
                _active={{ bg: 'blackAlpha.900' }}
              >
                <FiChevronRight />
              </Button>
            </Box>

            <HStack justify="center" gap={2}>
              {galleryImages.map((image, index) => (
                <Button
                  key={image.alt}
                  aria-label={`Go to gallery image ${index + 1}`}
                  onClick={() => setActiveGalleryIndex(index)}
                  minW="unset"
                  p={0}
                  w={activeGalleryIndex === index ? 8 : 3}
                  h={3}
                  borderRadius="full"
                  bg={activeGalleryIndex === index ? 'blue.600' : 'gray.300'}
                  _hover={{
                    bg: activeGalleryIndex === index ? 'blue.700' : 'gray.400',
                  }}
                />
              ))}
            </HStack>
          </Stack>
        </Container>
      </Box>

      <Separator />

      <Container maxW="7xl" py={8}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'start', md: 'center' }}
          gap={4}
        >
          <HStack gap={3}>
            <Image src={logo} alt="NotePro logo" boxSize="14" borderRadius="md" />
            <Text fontWeight="bold">NotePro</Text>
          </HStack>
          <Text color="gray.500" fontSize="sm">
            Highlight, annotate, and share the web.
          </Text>
          <HStack gap={4}>
            <ChakraLink href="/privacy-policy.html" color="blue.600" fontWeight="medium">
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              href="https://hagersew.com"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.600"
              display="inline-flex"
              alignItems="center"
              gap={1}
              fontWeight="medium"
            >
              Powered by Hagersew <FiExternalLink />
            </ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
