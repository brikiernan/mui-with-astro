import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { AstroThemeClasses, AstroThemeProvider } from 'astro-mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { Layout } from 'components';

const App: React.FC = () => {
  const [astroTheme, setAstroTheme] = useState<AstroThemeClasses>('dark-theme');

  useEffect(() => {
    document.body.className = astroTheme;
  }, [astroTheme]);

  const handleTheme = () => {
    setAstroTheme(prev => {
      if (prev === 'dark-theme') {
        return 'light-theme';
      }

      return 'dark-theme';
    });
  };

  return (
    <AstroThemeProvider
      theme={ownerTheme}
      mode={astroTheme === 'light-theme' ? 'light' : 'dark'}
    >
      <Button onClick={handleTheme}>Mode</Button>
      <Layout />
    </AstroThemeProvider>
  );
};

export default App;
