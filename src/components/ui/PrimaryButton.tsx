import { Button, type ButtonProps } from '@chakra-ui/react'

type PrimaryButtonProps = ButtonProps & {
  shine?: boolean
}

export function PrimaryButton({ shine = true, className, ...props }: PrimaryButtonProps) {
  return (
    <Button
      colorPalette="brand"
      fontWeight="semibold"
      bg="brand.600"
      color="white"
      borderWidth="0"
      _hover={{ bg: 'brand.700' }}
      _active={{ bg: 'brand.800' }}
      className={shine ? `cta-shine ${className ?? ''}`.trim() : className}
      {...props}
    />
  )
}
