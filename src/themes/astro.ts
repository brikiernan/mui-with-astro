import { createTheme } from '@mui/material';
import reference from '@astrouxds/design-tokens/dist/json/base.reference.json';
import { astroTokens as astro } from './astro-tokens';
import { fontControlBody1 } from './utils';

export const astroTheme = createTheme({
  astro,
  palette: {
    common: {
      black: astro.text.black,
      white: astro.text.white,
    },
    /* -- throws unsupported format error for var() -- */
    primary: {
      main: astro.text.interactive.default,
    },
    secondary: {
      main: astro.text.interactive.hover,
    },
    error: {
      main: astro.text.error,
    },
    warning: {
      main: astro.status.caution,
    },
    info: {
      main: astro.status.standby,
    },
    success: {
      main: astro.status.normal,
    },
    text: {
      primary: astro.text.primary,
      // does NOT throw
      secondary: astro.text.secondary,
    },
    /* -- end unsupported errors -- */
    divider: astro.text.primary,
    background: {
      default: astro.background.base.default,
      paper: astro.background.surface.default,
    },
    action: {
      hover: astro.background.base.default,
      selected: astro.background.base.selected,
    },
    grey: {
      '100': reference['color-palette-grey-100'],
    },
  },
  shape: {
    borderRadius: reference['radius-base'],
  },
  typography: {
    fontFamily: reference['font-control-body-1-font-family'],
    button: fontControlBody1,
    body1: fontControlBody1,
  },
  // spacing: (factor: number) => `${0.25 * factor}rem`, // astro spacing formula
  /* -- Start default Mui component overrides -- */
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
          borderRadius: reference['radius-base'],
          '&:hover': {
            backgroundColor: astro.background.interactive.hover,
          },
        },
        root: {
          padding: astro.spacing(2, 4),
          textTransform: 'none',
          ...fontControlBody1,
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
            boxShadow: `-4px 0 0 0 ${astro.border.interactive.default}`,
            paddingLeft: astro.spacing(3),
            marginLeft: astro.spacing(1),
          },
          '&.MuiListItemButton-divider': {
            borderBottomWidth: astro.border.width.sm,
            borderBottomStyle: 'solid',
            borderBottomColor: astro.text.inverse,
          },
          gap: astro.spacing(4),
          padding: astro.spacing(1, 4),
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
      border: {
        interactive: {
          default: string;
        };
        width: {
          sm: string;
        };
      };
      spacing: Spacing;
      status: {
        caution: string;
        normal: string;
        standby: string;
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

interface Spacing {
  /**
   * Uses a factor of 4 formula i.e... (0.25 * factor)
   *
   * Examples:
   *
   * spacing(4) => 1rem
   *
   * spacing(2, 6) => 0.5rem 1.5rem
   *
   * spacing(0.5, 1, 0.25) => 0.125rem 1rem 0.0625rem
   *
   * spacing(1, 1, 4, 2.75) => 0.25rem 0.25rem 1rem 0.6875rem
   *
   */
  (allSides: number): string;
  (topBottom: number, rightLeft: number): string;
  (top: number, rightLeft: number, bottom: number): string;
  (top: number, right: number, bottom: number, left: number): string;
}
