import { RuxButton } from '@astrouxds/react';
import { Box, Stack, Typography } from '@mui/material';

import { StatusBarExample } from './status-bar-example';
import { AstroList } from './astro-list';

export const Layout: React.FC = () => {
  // Mui useTheme hook can also be used with the astro tokens available
  // const theme = useTheme();
  // console.log('[theme.astro]:', theme.astro);

  return (
    <Stack p={({ astro }) => astro.spacing(4)} spacing={8}>
      <RuxButton>Astro Button</RuxButton>

      <Box width={500}>
        <Typography variant='h5' gutterBottom>
          Astro styled List with List Item Buttons.
        </Typography>

        <AstroList />
      </Box>

      <Box width={500}>
        <Typography variant='h5' gutterBottom>
          Astro styled custom StatusBar component.
        </Typography>

        <StatusBarExample />
      </Box>

      <Stack spacing={3}>
        <Typography variant='display1'>Display 1</Typography>
        <Typography variant='display2'>Display 2</Typography>
        <Typography variant='h1'>Heading 1</Typography>
        <Typography variant='h2'>Heading 2</Typography>
        <Typography variant='h3'>Heading 3</Typography>
        <Typography variant='h4'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
        <Typography variant='body1'>Body 1</Typography>
        <Typography variant='body2'>Body 2</Typography>
        <Typography variant='body3'>Body 3</Typography>
      </Stack>
    </Stack>
  );
};
