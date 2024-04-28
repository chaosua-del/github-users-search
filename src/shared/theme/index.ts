'use client';

import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fonts } from './fonts';
import { shadows } from './shadows';
import { styles } from './styles';

export const theme = extendTheme({
  fonts,
  semanticTokens: {
    colors,
  },
  styles,
  shadows,
  breakpoints,
});
