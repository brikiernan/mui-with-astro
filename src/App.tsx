import React, { useEffect, useState } from 'react';
import { AstroThemeClasses, AstroThemeProvider } from 'astro-mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { Layout, ThemeSwitch } from 'components';

const App: React.FC = () => {
  const [astroTheme, setAstroTheme] = useState<AstroThemeClasses>('dark-theme');
  const mode = astroTheme === 'light-theme' ? 'light' : 'dark';

  useEffect(() => {
    document.body.className = astroTheme;
  }, [astroTheme]);

  return (
    <AstroThemeProvider debug mode={mode} theme={ownerTheme(mode)}>
      <ThemeSwitch {...{ mode, setAstroTheme }} />
      <Layout />
    </AstroThemeProvider>
  );
};

export default App;
