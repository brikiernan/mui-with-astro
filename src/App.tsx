import { useEffect } from 'react';
import { astroTheme } from 'themes/astro';
import {
  Box,
  Button,
  CssBaseline,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
} from '@mui/material';

const App: React.FC = () => {
  useEffect(() => console.log(astroTheme), []);

  return (
    <ThemeProvider theme={astroTheme}>
      <CssBaseline />
      <Box minHeight='200vh'>
        <Button>Rux Button</Button>
        <List
          sx={{
            width: theme => theme.spacing(50), // factor of 8 = 25rem || 400px
            m: ({ astro }) => astro.spacing(4), // factor of 4 =  1rem || 16px
          }}
        >
          <ListItemButton>
            <ListItemText
              primary='I am the primary text.'
              secondary='And I am the secondary text.'
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary='I am the primary text.'
              secondary='And I am the secondary text.'
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary='I am the primary text.'
              secondary='And I am the secondary text.'
            />
          </ListItemButton>
          <ListItemButton selected>
            <ListItemText
              primary='I am the primary text.'
              secondary='And I am the secondary text.'
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemText
              primary='I am the primary text.'
              secondary='And I am the secondary text.'
            />
          </ListItemButton>
        </List>
      </Box>
    </ThemeProvider>
  );
};

export default App;
