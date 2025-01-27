import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { NavLink } from 'react-router-dom';
import { Home, Person, BarChartOutlined, ProductionQuantityLimits, TableBar, Category, AddShoppingCart } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <Home />, path: '/' },
    { text: 'Usuarios', icon: <Person />, path: '/usuarios' },
    { text: 'Productos', icon: <ProductionQuantityLimits />, path: '/productos' },
    { text: 'Categorías', icon: <Category />, path: '/categorias' },
    { text: 'Mesas', icon: <TableBar />, path: '/mesas' },
    { text: 'Pedidos', icon: <AddShoppingCart />, path: '/pedidos' },
    { text: 'Reportes', icon: <BarChartOutlined />, path: '/reportes' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        className="dark:!bg-gray-900 !bg-gray-800"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Dashboard de Administración
          </Typography>
          <Box>
            <Avatar alt="Usuario" src="/static/images/avatar/1.jpg" />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className="bg-gray-800 dark:bg-gray-900"
        PaperProps={{
          className: '!bg-gray-100 dark:!bg-gray-900 !text-white',
        }}
      >

        <DrawerHeader>
          <div
            className={`flex items-center py-4 px-3 transition-all duration-300 ${open ? 'justify-start' : 'justify-center'
              }`}
          >
            <img
              src="/logo.png" // Cambia la ruta al logo que uses
              alt="Logo"
              className={`transition-all duration-300 ${open ? 'w-24' : 'w-10'}`}
            />

            <Typography
              variant="h6"
              className="text-white ml-2 font-semibold transition-all duration-300"
            >
              Mi App
            </Typography>
          </div>
          <IconButton onClick={handleDrawerClose} color='inherit'>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <List>
          {menuItems.map((item) => (
            <NavLink
              key={item.text}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center p-3 my-2 rounded-lg ${isActive
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:bg-cyan-300 hover:text-black dark:text-gray-300 dark:hover:bg-cyan-700 dark:hover:text-white'
                }`
              }
            >
              <span className="mr-3">{item.icon}</span>
              {open && item.text}
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
