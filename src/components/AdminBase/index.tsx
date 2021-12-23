import {
  AppBar as MuiAppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Drawer as MuiDrawer,
  Theme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
const drawerWidth = 240;

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  marginTop: '64px',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  boxShadow: '0px 2px 4px -4px rgb(0 0 0 / 20%)',
  border:'none',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const AppBar2 = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexGrow: 1,
  border:'none',
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

import React, { useState } from 'react';

export const AdminBase = ({ children }: any) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className='admin-base'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar2 position='fixed' open={openDrawer}>
          <Toolbar>
          </Toolbar>
        </AppBar2>
        <AppBar position='fixed' open={openDrawer}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawer}
              edge='start'
              sx={{
                marginRight: '36px',
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div'>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={openDrawer}>
          <DrawerHeader sx={{height: '64px'}}>

          </DrawerHeader>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </div>
  );
};
