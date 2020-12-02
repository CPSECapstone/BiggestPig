import React from 'react';
import {Link} from 'react-router-dom';
import {useStyles} from '../styles';
import {AppBar, Button, IconButton, Toolbar, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useAuth} from '../contexts/authorize';

export const Header = () => {
  const {setAuth} = useAuth();

  const logout = () => {
    setAuth();
  };

  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.navBar}>
        <IconButton component={ Link } to="/home" edge="start" color="inherit">
          <HomeIcon />
        </IconButton >
        <Typography variant="h5" className={classes.title}>
                    Cloudhaven
        </Typography>
        <Button onClick={logout} color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
};

export const BackLink = (props) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.back} 
    component={ Link } to="../" {...props} 
    style={{position: 'absolute', left: '10px', bottom: '10px'}}>
      <ArrowBackIosIcon />
    </IconButton>
  );
};

export const SuccessButton = (props) => {
  return (
    <button
      className="rounded px-4 py-3 bg-green-400 text-gray-100 uppercase font-semibold shadow-lg sm:px-3 sm:text-sm sm:font-bold hover:bg-green-500 active:bg-green-600"
      {...props}
    />
  );
};
