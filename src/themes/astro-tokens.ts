import { AstroTheme } from '@mui/material';

export const astroTokens: AstroTheme['astro'] = {
  background: {
    base: {
      default: 'var(--color-background-base-default, #101923)',
      header: 'var(--color-background-base-header, #172635)',
      hover: 'var(--color-background-base-hover, #142435)',
      selected: 'var(--color-background-base-selected, #1c3f5e)',
    },
    surface: {
      default: 'var(--color-background-surface-default, #1b2d3e)',
      header: 'var(--color-background-surface-header, #172635)',
      hover: 'var(--color-background-surface-hover, #1c3851)',
      selected: 'var(--color-background-surface-selected, #1c3f5e)',
    },
    interactive: {
      default: 'var(--color-background-interactive-default, #4dacff)',
      hover: 'var(--color-background-interactive-hover, #92cbff)',
    },
  },
  radius: {
    base: 'var(--radius-base, 3px)',
    circle: 'var(--radius-circle, 50%)',
  },
  text: {
    primary: 'var(--color-text-primary, #fffff)',
    secondary: 'var(--color-text-secondary, #d4d8dd)',
    placeholder: 'var(--color-text-placeholder, #a4abb6)',
    inverse: 'var(--color-text-inverse, #080c11)',
    interactive: {
      default: 'var(--color-text-interactive-default, #4dacff)',
      hover: 'var(--color-text-interactive-hover, #92cbff)',
    },
    black: 'var(--color-text-black, #000000)',
    error: 'var(--color-text-error, #ff3838)',
    white: 'var(--color-text-white, #ffffff)',
  },
};
