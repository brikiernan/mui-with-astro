import { createTheme } from '@mui/material';
import { astroTokens as astro } from './astro-tokens';

export const astroTheme = createTheme({
  astro,
  shape: {
    borderRadius: astro.radius.base,
  },
  spacing: (factor: number) => `${0.25 * factor}rem`, // astro spacing formula
  palette: {
    action: {
      hover: astro.background.base.default,
    },
    background: {
      default: astro.background.base.default,
    },
    // error: {
    //   // throws unsupported format
    //   main: '#ff3838', // 'var(--color-text-error)',
    // },
    // primary: {
    //   // throws unsupported format
    //   main: '#4dacff', // 'var(--color-background-interactive-default)',
    // },
    // text: {
    //   // throws unsupported format
    //   primary: '#ffffff', // astro.text.primary,
    // },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        contained: {
          color: astro.text.inverse,
          backgroundColor: astro.background.interactive.default,
          borderRadius: astro.radius.base,
          '&:hover': {
            backgroundColor: astro.background.interactive.hover,
          },
        },
        root: {
          fontWeight: 'var(--font-control-body-1-font-weight)',
          fontSize: 'var(--font-size-base)',
          lineHeight: 'var(--line-height-sm)',
          textAlign: 'center',
          letterSpacing: '0.005em',
          padding: 'var(--spacing-2) var(--spacing-4)',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: astro.background.surface.default,
        },
      },
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
        divider: true,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: astro.background.surface.hover,
          },
          '&.Mui-selected': {
            backgroundColor: astro.background.surface.selected,
            borderLeft: '4px solid var(--color-border-interactive-default)',
            paddingLeft: 12,
          },
          '&.MuiListItemButton-divider': {
            borderBottomWidth: 'var(--border-width-sm)',
            borderBottomStyle: 'solid',
            borderBottomColor: astro.text.inverse,
          },
          gap: 16,
          padding: 'var(--spacing-1) var(--spacing-4)',
        },
      },
    },
  },
});

declare module '@mui/material' {
  interface AstroTheme {
    astro: {
      background: {
        base: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        surface: {
          default: string;
          header: string;
          hover: string;
          selected: string;
        };
        interactive: {
          default: string;
          hover: string;
        };
      };
      radius: {
        base: string;
        circle: string;
      };
      text: {
        primary: string;
        secondary: string;
        placeholder: string;
        inverse: string;
        interactive: {
          default: string;
          hover: string;
        };
        white: string;
        black: string;
        error: string;
      };
    };
  }

  interface Theme extends AstroTheme {}
  interface ThemeOptions extends AstroTheme {}
}
