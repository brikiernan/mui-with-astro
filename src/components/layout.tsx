import { Box, Stack, Typography, useTheme } from '@mui/material';
import { RuxButton } from '@astrouxds/react';
import { RuxList } from './rux-list';

export const Layout: React.FC = () => {
  const theme = useTheme();
  // Can use the Mui useTheme hook with the astro theme available
  // console.log('[theme.astro]:', theme.astro);

  return (
    <Stack p={({ astro }) => astro.spacing(4)} spacing={2}>
      <RuxButton>Astro Button</RuxButton>

      <Box width={({ astro }) => astro.spacing(100)}>
        <Typography variant='h5' gutterBottom>
          Astro styled List with List Item Buttons.
        </Typography>
        <RuxList />
      </Box>
      <Box color={({ astro }) => astro.color.text.primary} component='pre'>
        {JSON.stringify(theme.palette, null, 2)}
      </Box>
    </Stack>
  );
};
