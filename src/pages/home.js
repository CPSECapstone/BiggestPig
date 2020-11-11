import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Button from "@material-ui/core/Button";

import { useStyles } from "../styles";
import { useAuth } from "../contexts/authorize.js";


export default function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    const { setAuth } = useAuth();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const logout = () => {
        setAuth();
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
            <h1>Welcome Home</h1>
            <Button variant="contained" color="secondary" onClick={logout} style={{ alignSelf: 'center' }}>Logout</Button>

            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.navBar}
            >
                <BottomNavigationAction
                    label="Home"
                    value="Home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    label="Login"
                    value="login"
                />
            </BottomNavigation>
        </div>
    );
}