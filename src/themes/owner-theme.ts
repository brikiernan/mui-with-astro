import { createTheme, Theme } from '@mui/material';
import { astroTokens, Mode } from 'astro-mui-theme';

export const ownerTheme = (mode: Mode): Theme => {
  const astro = astroTokens(mode);

  return createTheme({
    palette: {
      background: {
        default: 'green',
      },
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            backgroundColor: astro.color.background.surface.default,
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
              backgroundColor: astro.color.background.surface.hover,
            },
            '&.Mui-selected': {
              backgroundColor: astro.color.background.surface.selected,
              boxShadow: `-4px 0 0 0 ${astro.color.border.interactive.default}`,
              paddingLeft: astro.spacing(3),
              marginLeft: astro.spacing(1),
            },
            '&.MuiListItemButton-divider': {
              borderBottomWidth: astro.border.width.sm,
              borderBottomStyle: 'solid',
              borderBottomColor: astro.color.text.inverse,
            },
            gap: astro.spacing(4),
            padding: astro.spacing(1, 4),
          },
        },
      },
    },
  });
};
