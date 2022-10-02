import { Stack, Typography } from '@mui/material';
import { RuxButton } from '@astrouxds/react';
import type { AstroThemeClasses, Mode } from 'astro-mui-theme';

interface ThemeSwitchProps {
  mode: Mode;
  setAstroTheme: React.Dispatch<React.SetStateAction<AstroThemeClasses>>;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  mode,
  setAstroTheme,
}) => {
  const handleTheme = () => {
    setAstroTheme(prev => {
      if (prev === 'dark-theme') {
        return 'light-theme';
      }

      return 'dark-theme';
    });
  };

  return (
    <Stack direction='row' alignItems='center' spacing={2} p={2}>
      <RuxButton onClick={handleTheme}>Switch Theme</RuxButton>
      <Typography variant='h3'>
        {mode.charAt(0).toUpperCase() + mode.slice(1)} Mode
      </Typography>
    </Stack>
  );
};
