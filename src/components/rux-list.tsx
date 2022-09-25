import { List, ListItemButton, ListItemText } from '@mui/material';

export const RuxList: React.FC = () => (
  <List>
    <ListItemButton>
      <ListItemText
        primary='I am the primary text.'
        secondary='And I am the secondary text.'
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemText
        primary='I am the primary text.'
        secondary='And I am the secondary text.'
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemText
        primary='I am the primary text.'
        secondary='And I am the secondary text.'
      />
    </ListItemButton>
    <ListItemButton selected>
      <ListItemText
        primary='I am the primary text.'
        secondary='And I am the secondary text.'
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemText
        primary='I am the primary text.'
        secondary='And I am the secondary text.'
      />
    </ListItemButton>
  </List>
);
