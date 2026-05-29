import { HStack, Link, Stack, Text, type StackProps } from '@chakra-ui/react'
import { storeLinks, type StoreLink } from '../../content/landing'

type StoreButtonsVariant = 'default' | 'compact' | 'inverted'

type StoreButtonsProps = StackProps & {
  variant?: StoreButtonsVariant
  fullWidth?: boolean
}

type BadgeSize = 'default' | 'compact'

function getBadgeStyles(id: StoreLink['id'], size: BadgeSize) {
  const compact = size === 'compact'

  if (id === 'chrome') {
    return {
      root: {
        bg: 'white',
        borderWidth: '1px',
        borderColor: 'gray.800',
        _hover: { bg: 'gray.50', textDecoration: 'none' },
      },
      iconSize: compact ? 22 : 32,
      eyebrow: {
        fontSize: compact ? '2xs' : 'xs',
        color: 'gray.600',
        fontWeight: 'normal',
        textTransform: 'none' as const,
        letterSpacing: 'normal',
      },
      headline: {
        fontSize: compact ? 'sm' : 'md',
        color: 'gray.900',
        fontWeight: 'bold',
        textTransform: 'lowercase' as const,
        letterSpacing: '-0.01em',
      },
    }
  }

  return {
    root: {
      bg: '#489FD6',
      borderWidth: '0',
      _hover: { bg: '#3d8fc4', textDecoration: 'none' },
    },
    iconSize: compact ? 22 : 32,
    eyebrow: {
      fontSize: compact ? '2xs' : 'xs',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.02em',
    },
    headline: {
      fontSize: compact ? 'md' : 'lg',
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.01em',
      lineHeight: '1.1',
    },
  }
}

function StoreBadge({
  link,
  size,
  fullWidth,
}: {
  link: StoreLink
  size: BadgeSize
  fullWidth?: boolean
}) {
  const Icon = link.icon
  const styles = getBadgeStyles(link.id, size)
  const compact = size === 'compact'

  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      gap={compact ? 2 : 3}
      px={compact ? 3 : 4}
      py={compact ? 1.5 : 2.5}
      minH={compact ? '40px' : '52px'}
      minW={compact ? '140px' : '180px'}
      flex={fullWidth ? 1 : undefined}
      w={fullWidth ? 'full' : undefined}
      borderRadius="md"
      textDecoration="none"
      transition="background 0.2s"
      {...styles.root}
    >
      <Icon aria-hidden size={styles.iconSize} style={{ flexShrink: 0 }} />
      <Stack gap={0} lineHeight="1.15">
        <Text {...styles.eyebrow}>{link.eyebrow}</Text>
        <Text {...styles.headline}>{link.headline}</Text>
      </Stack>
    </Link>
  )
}

export function StoreButtons({
  variant = 'default',
  fullWidth = false,
  ...stackProps
}: StoreButtonsProps) {
  const size: BadgeSize = variant === 'compact' ? 'compact' : 'default'

  return (
    <HStack
      gap={variant === 'compact' ? 2 : 3}
      flexWrap="wrap"
      w={fullWidth ? 'full' : undefined}
      justify={fullWidth ? 'stretch' : undefined}
      {...stackProps}
    >
      {storeLinks.map((link) => (
        <StoreBadge key={link.id} link={link} size={size} fullWidth={fullWidth} />
      ))}
    </HStack>
  )
}
