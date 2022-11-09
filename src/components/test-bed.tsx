import { useEffect, useState } from 'react';
import {
  RuxPopUp,
  RuxButton,
  RuxIcon,
  RuxMenu,
  RuxMenuItem,
} from '@astrouxds/react';
import { Box, Stack, Typography, Theme } from '@mui/material';
//going to try some agGrid stuff
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

export const Test: React.FC = () => {
  // Mui useTheme hook can also be used with the astro tokens available
  // const theme = useTheme();
  // console.log('[theme.astro]:', theme.astro);

  //on load add style=fixed to the first rux-pop-up

  function toggleFixed() {
    const popups = Array.from(document.querySelectorAll('rux-pop-up'));
    for (const popup of popups) {
      popup.style.position === 'fixed'
        ? (popup.style.position = 'relative')
        : (popup.style.position = 'fixed');
    }
  }

  function popover() {
    return (
      <div>
        {/* I think it isn't applying the fixed strategy properly */}
        <RuxPopUp placement='top'>
          <RuxIcon icon='apps' slot='trigger'></RuxIcon>
          <RuxMenu>
            <RuxMenuItem value='1'>Menu Item 1</RuxMenuItem>
            <RuxMenuItem value='2'>Menu Item 2</RuxMenuItem>
            <RuxMenuItem value='3'>Menu Item 3</RuxMenuItem>
          </RuxMenu>
        </RuxPopUp>
      </div>
    );
  }

  //grid stuff
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'button', cellRenderer: popover },
  ]);

  return (
    <Stack p={4} spacing={8} className=''>
      <div className='ag-theme-material' style={{ width: '100%', height: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
      <RuxButton onClick={toggleFixed}>Toggle Fixed Style</RuxButton>
    </Stack>
  );
};

export default Test;
