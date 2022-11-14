import { useState } from 'react';
import { RuxContainer, RuxTree, RuxTreeNode } from '@astrouxds/react';
import { Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
  return (
    <Stack p={4} spacing={8} className=''>
      <RuxContainer>
        <div slot='header'>
          <Link to='thing1'>Outside component</Link>
          <RuxTree>
            <Link to='/slotblink'>
              <RuxTreeNode>Home</RuxTreeNode>
            </Link>
            <Link to='thing1'>
              <RuxTreeNode>SlotBlink</RuxTreeNode>
            </Link>
            <Link to='thing2'>
              <RuxTreeNode>Grid Test</RuxTreeNode>
            </Link>
          </RuxTree>
        </div>
        <div slot='footer'>
          <Outlet />
        </div>
      </RuxContainer>
    </Stack>
  );
};

export default Nav;
