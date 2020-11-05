import React from "react";
import { Link } from "react-router-dom";
import {secondaryFontColor, useStyles} from "./styles";
import {Button, IconButton} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

export const Header = () => {
    const classes = useStyles();
    return (
        <header>
            <div className={classes.navBar}>
                <Link to="/">
                    <IconButton >
                        <HomeIcon className={classes.navBar} />
                    </IconButton >
                </Link>
                <h1>
                    Cloudhaven
                </h1>
                <Link to="/demo">
                    <Button variant="contained" color="primary">
                        Profile
                    </Button>
                </Link>
            </div>
        </header>
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