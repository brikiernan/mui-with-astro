import { useState } from 'react';
import { RuxPopUp, RuxStatus } from '@astrouxds/react';
import { Box, BoxProps, Stack, Typography } from '@mui/material';

const setPercent = (value: number, max: number) => (value / max) * 100 + '%';

type StatusBarSectionOption = {
  type: Status;
  value: number;
  label?: string;
};

type StatusBarProps = {
  sections: StatusBarSectionOption[];
  width: string | number;
  height?: string | number;
  isInfoOpen?: boolean;
};

export const StatusBar = ({
  sections,
  width,
  height = '0.5rem',
  isInfoOpen = false,
}: StatusBarProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  const max = sections
    .map(section => section.value)
    .reduce((prev, current) => prev + current, 0);

  return (
    <RuxPopUp placement='top' open={isInfoOpen || open}>
      <Stack
        slot='trigger'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        direction='row'
        width={width}
        sx={{ cursor: 'default' }}
        borderRadius={({ astro }) => astro.radius.base}
        overflow='hidden'
      >
        {sections.map(({ type, value }) => (
          <StatusBarSection
            key={type}
            status={type}
            width={setPercent(value, max)}
            height={height}
          />
        ))}
      </Stack>
      <StatusBarInfo sections={sections} />
    </RuxPopUp>
  );
};

const statusBarSectionProps = ({
  status,
  width,
  height,
}: StatusBarSectionProps): BoxProps => ({
  bgcolor: ({ astro }) => astro.color.status[status],
  height,
  width,
});

type Status = 'critical' | 'serious' | 'caution' | 'normal' | 'standby' | 'off';

type StatusBarSectionProps = {
  status: Status;
  width: string;
  height: string | number;
};

const StatusBarSection = (props: StatusBarSectionProps) => (
  <Box {...statusBarSectionProps(props)} />
);

type StatusBarInfoProps = {
  sections: StatusBarSectionOption[];
};

const StatusBarInfo = ({ sections }: StatusBarInfoProps) => (
  <Stack p={2} spacing={2}>
    {sections.map(({ type, value, label }) => (
      <Stack key={type} direction='row' alignItems='center' spacing={4}>
        <RuxStatus status={type} />
        <Typography flexGrow={1}>
          {label || type.charAt(0).toUpperCase() + type.slice(1)}
        </Typography>
        <Typography>{value}</Typography>
      </Stack>
    ))}
  </Stack>
);
