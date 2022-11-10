import React, { useEffect, useState } from 'react';
import { AstroThemeClasses, AstroThemeProvider } from '@astrouxds/mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { Layout, ThemeSwitch } from 'components';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Test from 'components/test-bed';

const App: React.FC = () => {
  const [astroTheme, setAstroTheme] = useState<AstroThemeClasses>('dark-theme');
  const mode = astroTheme === 'light-theme' ? 'light' : 'dark';

  useEffect(() => {
    document.body.className = astroTheme;
  }, [astroTheme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
    },
    {
      path: '/foo',
      element: <Test />,
    },
  ]);

  return (
    <AstroThemeProvider debug={true} mode={mode} theme={ownerTheme(mode)}>
      <ThemeSwitch {...{ mode, setAstroTheme }} />
      <RouterProvider router={router} />
    </AstroThemeProvider>
  );
};

export default App;
