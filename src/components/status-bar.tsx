import { useEffect, useState } from 'react';
import { RuxStatus } from '@astrouxds/react';
import { Box, BoxProps, Stack, Tooltip, Typography } from '@mui/material';

const setPercent = (value: number, max: number) => (value / max) * 100 + '%';

type StatusBarSectionOption = {
  type: Status;
  value: number;
};

type StatusBarProps = {
  sections: StatusBarSectionOption[];
  height?: string | number;
  isInfoOpen?: boolean;
};

export const StatusBar = ({
  sections,
  height = '0.5rem',
  isInfoOpen,
}: StatusBarProps) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    if (isInfoOpen) return onOpen();
    onClose();
  }, [isInfoOpen]);

  const max = sections
    .map(section => section.value)
    .reduce((prev, current) => prev + current, 0);

  return (
    <Tooltip
      placement='top'
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      title={<StatusBarInfo {...{ sections }} />}
    >
      <Stack direction='row' width='inherit'>
        {sections.map(({ type, value }) => (
          <StatusBarSection
            key={type}
            width={setPercent(value, max)}
            height={height}
            status={type}
          />
        ))}
      </Stack>
    </Tooltip>
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
    {sections.map(({ type, value }) => (
      <Stack key={type} direction='row' alignItems='center' spacing={4}>
        <RuxStatus status={type} />
        <Typography flexGrow={1}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Typography>
        <Typography>{value}</Typography>
      </Stack>
    ))}
  </Stack>
);
