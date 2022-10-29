import { useState } from 'react';
import { RuxIcon } from '@astrouxds/react';
import { Stack } from '@mui/material';

import { StatusBar } from './status-bar';

export const StatusBarExample = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(prev => !prev);

  return (
    <Stack direction='row' width='100%' alignItems='center' spacing={2}>
      <RuxIcon
        icon='info'
        size='1.5rem'
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      />
      <StatusBar
        isInfoOpen={open}
        sections={[
          { type: 'standby', value: 8 },
          { type: 'caution', value: 0 },
          { type: 'critical', value: 2, label: 'Emergency' },
          { type: 'normal', value: 23, label: 'A okay' },
          { type: 'off', value: 1, label: 'State off' },
          { type: 'serious', value: 4 },
        ]}
      />
    </Stack>
  );
};
