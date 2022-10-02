import { useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

export const RuxList: React.FC = () => {
  const [selected, setSelected] = useState(3);

  const handleSelected = (index: number) => {
    setSelected(prev => {
      if (prev === index) return -1;
      return index;
    });
  };

  const items = Array<{ primary: string; secondary: string }>(5).fill({
    primary: 'I am the primary text at index',
    secondary: 'And I am the secondary text at index',
  });

  return (
    <List>
      {items.map((item, i) => (
        <ListItemButton
          key={i}
          selected={i === selected}
          onClick={() => handleSelected(i)}
        >
          <ListItemText
            primary={`${item.primary} ${i}.`}
            secondary={`${item.secondary} ${i}.`}
          />
        </ListItemButton>
      ))}
    </List>
  );
};
