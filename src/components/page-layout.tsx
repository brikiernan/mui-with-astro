import { Outlet, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { RuxTab, RuxTabs } from '@astrouxds/react';

const layoutSx = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 4,
  p: 4,
};

export const PageLayout = () => {
  const navigate = useNavigate();

  const handleSelected = (e: CustomEvent) => navigate(e.detail.id);

  return (
    <>
      <RuxTabs onRuxselected={handleSelected}>
        <RuxTab id='page1'>Page 1</RuxTab>
        <RuxTab id='page2'>Page 2</RuxTab>
        <RuxTab id='page3'>Page 3</RuxTab>
      </RuxTabs>
      <Box sx={layoutSx}>
        <Outlet />
      </Box>
    </>
  );
};
