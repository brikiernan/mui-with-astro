import { useEffect, useLayoutEffect, useState } from 'react';
import { astroTheme } from 'themes/astro';
import { astroTokens } from 'themes/astro-tokens';
import {
  Button,
  CssBaseline,
  List,
  ListItemButton,
  ListItemText,
  Theme,
  ThemeProvider,
} from '@mui/material';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(astroTheme);

  useEffect(() => console.log(theme), [theme]);

  useLayoutEffect(() => {
    const textTokens = Object.values(astroTokens.text);
    textTokens.forEach(textToken => {
      if (typeof textToken === 'object') return;
      const token = textToken.split(',')[0].split('(')[1];
      const cssDecloration = getComputedStyle(document.documentElement);

      // console.log(token);

      switch (token) {
        case '--color-text-primary': {
          const color = cssDecloration.getPropertyValue(token).trim();
          setTheme(prev => ({
            ...prev,
            palette: {
              ...prev.palette,
              text: {
                ...prev.palette.text,
                primary: color,
              },
            },
          }));
          return;
        }

        case '--color-text-secondary': {
          const color = cssDecloration.getPropertyValue(token).trim();
          setTheme(prev => ({
            ...prev,
            palette: {
              ...prev.palette,
              text: {
                ...prev.palette.text,
                secondary: color,
              },
            },
          }));
          return;
        }

        default:
          return;
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button>Rux Button</Button>
      <List>
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
    </ThemeProvider>
  );
};

export default App;
