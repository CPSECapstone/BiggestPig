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
    let formId = props.formID;
    let childrenArray = [];
    for (let i in props) {
        if (i.startsWith("column")) {
            childrenArray.push(props.[i].children);
        }
    }
    console.log("childrenfound");
    console.log(childrenArray);

    function renderDetails(information) {
        return (
            <label>{information.label}
            <input
                id="FormInput"
                type="text"
                value={information.validation}
            />
            </label>
        )
    }

    function renderItems(fieldVar) {
        console.log("fieldVar")
        console.log(fieldVar);
        const f = [];
        for (let i in fieldVar) {
            f.push(fieldVar.[i])
        }
        console.log("f")
        console.log(f)

        const mapped = f.map((information) => (renderDetails(information)));

        return (mapped);
    }

    return (
        <div className="centered">
            <form id={formId}>
                {childrenArray.map((item) => (renderItems(item)))}
            </form>
        </div>
    );
}
