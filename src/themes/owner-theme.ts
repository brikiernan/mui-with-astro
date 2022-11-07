import { createTheme, Theme } from '@mui/material';
import { astroTokens, Mode } from '@astrouxds/mui-theme';

export const ownerTheme = (mode: Mode): Theme => {
  const {
    color: { background, border, text },
    radius,
    spacing,
    ...astro
  } = astroTokens({ mode });

  return createTheme({
    // Owner cannot override any palette.
    palette: {
      // This will not work.
      background: {
        default: 'lightgreen',
      },
    },
    // Owner cannot override shape.
    shape: {
      // This will not work.
      borderRadius: 10,
    },
    // Owner cannot override any typography.
    typography: {
      // This will not work.
      fontSize: 24,
    },
    // Uses the astro spacing formula on all MUI theme spacing
    spacing,
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: background.surface.default,
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
              backgroundColor: background.surface.hover,
            },
            '&.Mui-selected': {
              paddingLeft: spacing(3),
              borderLeftStyle: 'solid',
              borderLeftWidth: astro.border.width.lg,
              borderLeftColor: border.interactive.default,
              backgroundColor: background.surface.selected,
            },
            '&.MuiListItemButton-divider': {
              borderBottom: 'none',
              boxShadow: `0 -1px 0 0 ${text.inverse}`,
            },
            paddingRight: spacing(4),
            paddingLeft: spacing(4),
          },
        },
      },
      MuiListItemText: {
        defaultProps: {
          primaryTypographyProps: {
            noWrap: true,
            ...astro.typography.h3,
          },
          secondaryTypographyProps: {
            noWrap: true,
            ...astro.typography.h6,
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          disableGutters: true,
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          underlineNone: {
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: 0,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          InputLabelProps: { shrink: false },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: background.base.default,
            borderWidth: astro.border.width.xs,
            borderColor: border.interactive.default,
            borderStyle: 'solid',
            padding: '0.125rem 0.625rem 0.0625rem',
            fontSize: astro.typography.body3.fontSize,
            borderRadius: radius.base,
          },
        },
      },
    },
  });
};
