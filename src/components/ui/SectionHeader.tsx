import { Heading, Stack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

type SectionHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  maxW?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  maxW = '3xl',
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <Stack
      gap={4}
      textAlign={centered ? 'center' : 'left'}
      align={centered ? 'center' : 'start'}
      maxW={maxW}
    >
      <Text className="section-eyebrow">{eyebrow}</Text>
      <Heading
        size={{ base: '2xl', md: '3xl' }}
        letterSpacing="-0.03em"
        fontWeight="bold"
        color="fg.default"
        lineHeight="1.15"
      >
        {title}
      </Heading>
      {description && (
        <Text color="fg.muted" fontSize="lg" lineHeight="1.7">
          {description}
        </Text>
      )}
    </Stack>
  )
}
