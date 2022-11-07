import { useState } from 'react';
import { RuxPopUp, RuxStatus } from '@astrouxds/react';
import { Box, BoxProps, Stack, Theme, Typography } from '@mui/material';

const setPercent = (value: number, max: number) => (value / max) * 100 + '%';

type StatusBarSectionOption = {
  type: Status;
  value: number;
  label?: string;
};

type StatusBarProps = {
  sections: StatusBarSectionOption[];
  height?: string | number;
  isInfoOpen?: boolean;
};

export const StatusBar = ({
  sections,
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
        width={468}
        sx={{ cursor: 'default' }}
      >
        {sections.map(({ type, value }, i) => (
          <StatusBarSection
            key={type}
            status={type}
            width={setPercent(value, max)}
            height={height}
            isBorderLeft={i === 0}
            isBorderRight={i === sections.length - 1}
          />
        ))}
      </Stack>
      <StatusBarInfo sections={sections} />
    </RuxPopUp>
  );
};

const setRadius = ({ astro }: Theme) => astro.radius.base;

const statusBarSectionProps = ({
  status,
  width,
  height,
  isBorderLeft,
  isBorderRight,
}: StatusBarSectionProps): BoxProps => ({
  bgcolor: ({ astro }) => astro.color.status[status],
  height,
  width,
  sx: {
    borderTopLeftRadius: isBorderLeft ? setRadius : 0,
    borderBottomLeftRadius: isBorderLeft ? setRadius : 0,
    borderBottomRightRadius: isBorderRight ? setRadius : 0,
    borderTopRightRadius: isBorderRight ? setRadius : 0,
  },
});

type Status = 'critical' | 'serious' | 'caution' | 'normal' | 'standby' | 'off';

type StatusBarSectionProps = {
  status: Status;
  width: string;
  height: string | number;
  isBorderLeft: boolean;
  isBorderRight: boolean;
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
