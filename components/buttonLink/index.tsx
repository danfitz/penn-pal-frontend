import { Button as ChakraButton } from '@chakra-ui/react';
import NextLink from 'next/link';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  to: string;
  size?: 'lg' | 'md' | 'sm' | 'xs';
  outline?: boolean;
  sx?: any;
};

const ButtonLink = ({
  children,
  to,
  size = 'sm',
  outline = false,
  sx,
}: Props) => (
  <NextLink href={to} passHref>
    <ChakraButton
      as='a'
      size={size}
      sx={{
        ':hover': {
          color: outline ? 'blackAlpha' : 'white',
        },
        ...sx,
      }}
      colorScheme={outline ? 'blackAlpha' : 'pennBlue'}
      variant={outline ? 'outline' : 'solid'}
    >
      {children}
    </ChakraButton>
  </NextLink>
);

export default ButtonLink;