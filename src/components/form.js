import React, {} from 'react';

import TextField from '@material-ui/core/TextField';

// THIS FUNCTION TAKES IN SOME STUFF (from an API that we defined)
// AND RETURNS IT AS A FORM IN HTML
// fields is array of objects in form {"label":"example field name", "default":"defaulttext"}
// TODO how to make it do things given the variable
//      how much do we need it to do? does it just spit out html or does it do more?
// definitely need to make it pretty
// definitely need to make it do things
export default function FormGenerator(props) {
  const formId = props.formID;
  const childrenArray = [];
  for (const i in props) {
    if (i.startsWith('column')) {
      childrenArray.push(props.[i].children);
    }
  }
  console.log('childrenfound');
  console.log(childrenArray);

  function renderDetails(information) {
    return (
      <div>
        <TextField
          id={'filled-basic'}
          label={information.label}
          fullWidth
          variant="filled"
          defaultValue={information.validation}
        />
        <p></p>
      </div>
    );
  }

  function renderItems(fieldVar) {
    const f = [];
    for (const i in fieldVar) {
      f.push(fieldVar.[i]);
    }

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
