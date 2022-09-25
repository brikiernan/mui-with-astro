import { Box, useTheme } from '@mui/material';
import { RuxButton } from './rux-button';
import { RuxList } from './rux-list';

export const Layout: React.FC = () => {
  // Can use the MUI useTheme hook with the astro theme available
  const theme = useTheme();
  // console.log('[theme layout]:', theme);

  return (
    <Box>
      <RuxButton />
      <Box
        width={theme => theme.spacing(50)} // factor of 8 = 25rem || 400px
        m={theme => theme.astro.spacing(4)} // factor of 4 =  1rem || 16px
      >
        <RuxList />
      </Box>
      <Box sx={{ color: ({ astro }) => astro.text.primary }} component='pre'>
        {JSON.stringify(theme.palette, null, 2)}
      </Box>
    </Box>
  );
};
