import React from 'react';
import {Link} from 'react-router-dom';
import {useStyles} from '../styles';
import {AppBar, Button} from '@material-ui/core';
import {IconButton, Toolbar, Typography} from '@material-ui/core';
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

// class name too long
export const SuccessButton = (props) => {
  return (
    <button
      {...props}
    />
  );
};
