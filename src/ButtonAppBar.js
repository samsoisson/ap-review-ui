import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="center">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: -3 }}
            sy={{ mr:-3}}
          >
            {/* <MenuIcon></MenuIcon> */}
          </IconButton>
          <Button variant="contained" color="inherit"><Link to="/classes">Explore Reviews</Link></Button>
          <Typography variant="h1" component="div" sx={{ flexGrow: 2 }}>
            {/* <Button color="inherit">CLHS AP Classes Review</Button> */}
            <Link to="/">CLHS AP Courses Review</Link>
          </Typography>
          <Button variant="contained" color="inherit"><Link to="/new-class">Leave a review</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}