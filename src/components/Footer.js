import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; {new Date().getFullYear()} My E-Commerce Store. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
