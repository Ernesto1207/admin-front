import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    const drawerWidth = 240;

    return (
        <Box className="!bg-gray-800"
            sx={{ display: 'flex', height: '100vh', backgroundColor: 'transparent' }} >
            <CssBaseline />
            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth} />
            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth} />
            {/* Contenido principal */}
            <Box

                component="main"
                sx={{
                    flexGrow: 1,
                    ml: `0px`,
                    mt: '64px', // Espaciador para el Navbar
                    p: 2,
                    backgroundColor: "transparent",
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
