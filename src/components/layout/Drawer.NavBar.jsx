import { AccountCircle, Group, GroupAdd, Home } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const DrawerNavBar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menus = [
    { id: 1, menu: 'Home', link: '/', icon: 'Home' },
    {
      id: 2,
      menu: 'Lista de Pessoas',
      link: '/pessoa/',
      icon: 'Group',
    },
    {
      id: 3,
      menu: 'Adicionar Pessoa',
      link: '/pessoa/form',
      icon: 'GroupAdd',
    },
  ];

  function getIconByName(iconName) {
    switch (iconName) {
      case 'Home':
        return Home;
      case 'Group':
        return Group;
      case 'GroupAdd':
        return GroupAdd;
      default:
        return null;
    }
  }

  const DrawerList = (
    <Stack
      sx={{ width: 250, bgcolor: '#1467EA', height: '100%' }}
      role="presentation"
    >
      <Stack justifyContent={'center'} alignItems={'center'} sx={{ my: 5 }}>
        <AccountCircle sx={{ fontSize: 100, color: '#E5E5E5' }} />
      </Stack>
      <Divider />
      <List>
        {menus.map((menu, index) => {
          const isActive = location.pathname === menu.link;
          const IconComponent = getIconByName(menu.icon);
          return (
            <ListItem key={`${menu.id}--${index}`} disablePadding>
              <ListItemButton
                onClick={() => navigate(`${menu.link}`)}
                sx={{
                  bgcolor: isActive ? '#0C45A3' : 'inherit',
                  color: isActive ? 'white' : '#999999',
                  '&:hover': {
                    bgcolor: '#9EBDF9',
                  },
                }}
              >
                <ListItemIcon>
                  {IconComponent && (
                    <IconComponent
                      sx={{ color: isActive ? 'white' : 'black' }}
                    />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={menu.menu}
                  sx={{
                    color: isActive ? 'white' : 'black',
                  }}
                />
              </ListItemButton>
              <Divider />
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Stack>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};
