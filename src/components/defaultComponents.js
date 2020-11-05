import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../styles";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

export const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.navBar}>
                <IconButton component={ Link } to="/" edge="start" color="inherit" aria-label="Home">
                    <HomeIcon />
                </IconButton >
                <Typography variant="h5" className={classes.title}>
                    Cloudhaven
                </Typography>
                <Button component={ Link } to="/demo" color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export const BackLink = (props) => {
    return (
        <Link
            to="../"
            className="inline-block mt-4 px-4 py-3 ml-4 bg-blue-400 rounded text-gray-100 font-semibold uppercase shadow-lg sm:text-sm sm:font-bold hover:bg-blue-500 active:bg-blue-600"
            {...props}
        >
            &lt; Back
        </Link>
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