import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: '#fdcb00',
                color: '#333333'
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: 'space-between',
                    maxWidth: '600px',
                    width: '100%',
                    mx: 'auto'
                }}>
                <Typography
                    variant='h6'
                    component={Link}
                    to="/"
                    sx={{
                        textDecoration: 'none',
                        color: '#333333'
                    }}
                >
                    Recipe Finder
                </Typography>
                <Button color="inherit" component={Link} to="/add">
                    Add Recipe
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;