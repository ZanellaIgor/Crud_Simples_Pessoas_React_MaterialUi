import { Group, GroupAdd, Home } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const DrawerNavBar = ({ Children }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { id: 1, menu: 'Home', link: '/', icon: 'Home' },
    {
      id: 2,
      menu: 'Lista de Clientes',
      link: '/client/',
      icon: 'Group',
    },
    {
      id: 3,
      menu: 'Adicionar Cliente',
      link: '/client/form',
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
      sx={{ width: 250, bgcolor: '#115DF5', height: '100%' }}
      role="presentation"
    >
      <List sx={{ mt: 25 }}>
        {menus.map((menu, index) => {
          const isActive = location.pathname === menu.link;
          const IconComponent = getIconByName(menu.icon);
          return (
            <ListItem key={menu.id} disablePadding>
              <ListItemButton
                sx={{
                  bgcolor: isActive ? '#511DF0' : 'inherit',
                  color: isActive ? 'white' : '#9999',
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
                  primary={
                    <NavLink
                      to={`${menu.link}`}
                      style={{
                        textDecoration: 'none',
                        color: isActive ? 'white' : 'black',
                      }}
                    >
                      {menu.menu}
                    </NavLink>
                  }
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
    <>
      <Drawer variant="permanent">{DrawerList}</Drawer>
    </>
  );
};
