import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          My E-Commerce Store
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <IconButton color="inherit" component={Link} to="/cart">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
