import React, {} from 'react';
import Button from '@material-ui/core/Button';

// THIS FUNCTION TAKES IN SOME STUFF (from an API that we defined)
// AND RETURNS IT AS A FORM IN HTML
// fields is array of objects in form {"label":"example field name", "default":"defaulttext"}
//TODO how to make it do things given the variable
//      how much do we need it to do? does it just spit out html or does it do more?
// definitely need to make it pretty
// definitely need to make it do things
export default function FormGenerator(props) {
    return (
        <div className="centered">
            <form>
                {props.formFields.map((item, index) => (
                    <label>
                        {item.name}
                        <input
                            id='FormInput'
                            type="text"
                            value={item.default}
                        />
                    </label>
                ))}
            </form>
        </div>
    );
}
