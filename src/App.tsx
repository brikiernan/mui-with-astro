import React, { useEffect, useState } from 'react';
import { AstroThemeClasses, AstroThemeProvider } from '@astrouxds/mui-theme';
import { ownerTheme } from 'themes/owner-theme';
import { Layout, ThemeSwitch } from 'components';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import AgGridTest from 'components/test-bed';
import SlotBlink from 'components/slot-blink';
import Nav from 'components/nav';
import { PanelA } from 'components/panel-a';
import { PageLayout } from 'components/page-layout';
import { PanelB } from 'components/panel-b';
import { PanelC } from 'components/panel-c';
import { PanelD } from 'components/panel-d';

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
      path: '/dash',
      element: <PageLayout />,
      children: [
        {
          path: 'page1',
          element: (
            <>
              <PanelA />
              <PanelB />
            </>
          ),
        },
        {
          path: 'page2',
          element: (
            <>
              <PanelA />
              <PanelC />
            </>
          ),
        },
        {
          path: 'page3',
          element: (
            <>
              <PanelA />
              <PanelD />
            </>
          ),
        },
      ],
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
