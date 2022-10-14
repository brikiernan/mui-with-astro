import { createTheme, Theme } from '@mui/material';
import { astroTokens, Mode } from '@astrouxds/mui-theme';

export const ownerTheme = (mode: Mode): Theme => {
  const astro = astroTokens(mode);

  return createTheme({
    // Owner cannot override any palette.
    palette: {
      // This will not work.
      background: {
        default: 'lightgreen',
      },
    },
    // Owner can override most most mui components except the ones listed below.
    components: {
      MuiList: {},
      // List item button is styled with astro styles and cannot be overwritten
      // with the theme.
      MuiListItemButton: {
        // Any style overrides will not work.
        styleOverrides: {
          root: {
            // If there is an edge case where list item button styles need to be
            // overwritten the MUI system props and/or the SX prop will work to
            // override the astro-mui-theme
            backgroundColor: 'yellow',
          },
        },
      },
      // Start owner overrides
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
      MuiListItemText: {
        defaultProps: {
          primaryTypographyProps: {
            noWrap: true,
            ...astro.typography.h5,
          },
          secondaryTypographyProps: {
            noWrap: true,
            ...astro.typography.body2,
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
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: astro.color.background.base.default,
            borderWidth: astro.border.width.xs,
            borderColor: astro.color.border.interactive.default,
            borderStyle: 'solid',
            padding: '0.125rem 0.625rem 0.0625rem',
            fontSize: astro.typography.body3.fontSize,
            marginTop: '8px !important',
            borderRadius: astro.radius.base,
          },
        },
      },
    },
  });
};
