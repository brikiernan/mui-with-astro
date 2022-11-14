import { useState } from 'react';
import { RuxContainer } from '@astrouxds/react';
import { Stack } from '@mui/material';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nav from './nav';
import AgGridTest from './test-bed';
import { Layout } from './layout';
//going to try some agGrid stuff

export const SlotBlink: React.FC = () => {
  return (
    <Stack p={4} spacing={8} className=''>
      Blah
    </Stack>
  );
};

export default SlotBlink;
