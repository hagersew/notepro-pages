import { Box } from '@chakra-ui/react'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { Features } from '../components/sections/Features'
import { FinalCTA } from '../components/sections/FinalCTA'
import { Gallery } from '../components/sections/Gallery'
import { Hero } from '../components/sections/Hero'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Showcase } from '../components/sections/Showcase'
import { UseCases } from '../components/sections/UseCases'

export function LandingPage() {
  return (
    <Box bg="page" color="fg.default" minH="100vh">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Showcase />
        <UseCases />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </Box>
  )
}
