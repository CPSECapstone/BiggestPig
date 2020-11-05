import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import {useStyles} from "../styles";


export default function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
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
            <h1>
                Cloudhaven
            </h1>
            <BottomNavigationAction
                label="Login"
                value="login"

            />
        </BottomNavigation>
    );
}