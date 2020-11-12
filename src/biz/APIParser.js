import React, {} from 'react';
import FormGenerator from "../components/form";

export function parseJson(apiReturn) {
    let jsonObj = JSON.parse(apiReturn);

    // check authorization
    // if (authorizationTokenFunction(apiReturn.authorization)
        // continue
    //check target
    // if (targetTokenFunction(apiReturn.target)
        // continue

    let components = jsonObj.components;
    for (var comp in components) {
        //parse each type of form
        if (comp == "form") {
            return FormGenerator(components.form);
        }
        /*
        else if (c == "button") {
            return button html?
        }
        else if (c == "xyz") {
            to be discovered as needed
        }
         */
        else {
            console.log("api error")
            // what is our error handling?
        }
    }
}