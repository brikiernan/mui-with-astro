import { AstroTheme } from '@mui/material';
import system from '@astrouxds/design-tokens/dist/json/base.system.json';
import reference from '@astrouxds/design-tokens/dist/json/base.reference.json';
import { spacing } from './utils';

export const astroTokens: AstroTheme['astro'] = {
  background: {
    base: {
      default: system['color-background-base-default'],
      header: system['color-background-base-header'],
      hover: system['color-background-base-hover'],
      selected: system['color-background-base-selected'],
    },
    interactive: {
      default: system['color-background-interactive-default'],
      hover: system['color-background-interactive-hover'],
    },
    surface: {
      default: system['color-background-surface-default'],
      header: system['color-background-surface-header'],
      hover: system['color-background-surface-hover'],
      selected: system['color-background-surface-selected'],
    },
  },
  border: {
    interactive: {
      default: system['color-border-interactive-default'],
    },
    width: {
      sm: reference['border-width-sm'],
    },
  },
  spacing,
  status: {
    caution: system['color-status-caution'],
    normal: system['color-status-normal'],
    standby: system['color-status-standby'],
  },
  text: {
    primary: system['color-text-primary'],
    secondary: system['color-text-secondary'],
    placeholder: system['color-text-placeholder'],
    inverse: system['color-text-inverse'],
    interactive: {
      default: system['color-text-interactive-default'],
      hover: system['color-text-interactive-hover'],
    },
    black: system['color-text-black'],
    error: system['color-text-error'],
    white: system['color-text-white'],
  },
};
