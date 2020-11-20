import React from 'react';
import {parseJson} from "../biz/APIParser";
import {testJson} from "../biz/dummyApi";

import { useStyles } from "../styles";

export default function Demo2() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
            <h1>Welcome Home</h1>

            <div>
               {parseJson(testJson)}
            </div>
        </div>
    );
}