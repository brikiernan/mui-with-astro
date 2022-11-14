import React, { useEffect, useState } from 'react';
import { AstroThemeClasses, AstroThemeProvider } from '@astrouxds/mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { Layout, ThemeSwitch } from 'components';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import AgGridTest from 'components/test-bed';
import SlotBlink from 'components/slot-blink';
import Nav from 'components/nav';

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
      path: '/gridtest',
      element: <AgGridTest />,
    },
    {
      path: '/slotblink',
      element: <Nav />,
      children: [
        {
          path: 'thing1',
          element: <AgGridTest />,
        },
        {
          path: 'thing2',
          element: <Layout />,
        },
      ],
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
