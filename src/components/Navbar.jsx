import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box } from '@mui/material';

const Navbar = ({ drawerWidth }) => {
  return (
    <AppBar
      className='!bg-cyan-500 dark:!bg-cyan-900 !text-gray-100 dark:!text-white'
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // Asegurarse de que esté por encima del Sidebar
        width: `calc(100% - ${drawerWidth}px)`, // Restar el ancho del Sidebar
        ml: `${drawerWidth}px`, // Mover hacia la derecha
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Dashboard de Administración
        </Typography>
        <Box>
          <Avatar alt="Usuario" src="/static/images/avatar/1.jpg" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
