import { Box, Stack, Typography } from '@mui/material';
import { RuxButton } from '@astrouxds/react';
import { RuxList } from './rux-list';

export const Layout: React.FC = () => {
  // Mui useTheme hook can also be used with the astro tokens available
  // const theme = useTheme();
  // console.log('[theme.astro]:', theme.astro);

  return (
    <Stack p={({ astro }) => astro.spacing(4)} spacing={2}>
      <RuxButton>Astro Button</RuxButton>

      <Box width={400}>
        <Typography variant='h5' gutterBottom>
          Astro styled List with List Item Buttons.
        </Typography>
        <RuxList />
      </Box>

      <Typography variant='body3'>Body 3</Typography>

      <Typography variant='display1'>Display 1</Typography>

      <Typography variant='display2'>Display 2</Typography>
    </Stack>
  );
};
