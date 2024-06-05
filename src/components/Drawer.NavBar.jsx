import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
const menus = [
  { id: 1, menu: 'Home', link: '/', icon: '' },
  {
    id: 2,
    menu: 'Lista de Clientes',
    link: '/pages/clients/list_client',
    icon: '',
  },
  { id: 3, menu: 'Home', link: '/pages/clients/new_client', icon: '' },
];

export default function DrawerNavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250, mt: 25 }}
      role="presentation"
      variant="permanent"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menus.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={text.link}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Drawer variant="permanent" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
