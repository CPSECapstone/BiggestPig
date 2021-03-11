import React, { } from 'react';
import buttonGenerator from './button';
import TextField from '@material-ui/core/TextField';

// This function takes input in from an API that we defined below:
// https://docs.google.com/document/d/1ypoLhyBFQx_O77DBh7Rj-gX9gO2b4tPxkTuNVJBseFs/edit#heading=h.zbevhq6kienr)
// AND RETURNS IT AS A FORM IN HTML
// fields is array of objects in form
// {"label":"example field name", "default":"defaulttext"}
// how much do we need it to do? does it just spit out html?
// definitely need to make it pretty
export default function formGenerator(props) {
  const formId = props.formID;
  const childrenArray = [];

  for (const i in props) {
    if (i.startsWith('column')) {
      childrenArray.push(props.[i].children);
    }
  }

  function renderDetails(information) {
    if (typeof information.label !== 'undefined') {
      return (
        <div>
          <TextField
            id={'filled-basic'}
            label={information.label}
            fullWidth
            variant="filled"
            defaultValue={information.validation}
          />
          <br></br>
        </div>
      );
    } else {
      return information;
    }
  }

  function renderItems(fieldVar) {
    const f = [];
    if (fieldVar) {
      for (const i in fieldVar) {
        if (i !== 'button') {
          f.push(fieldVar.[i]);
        } else {
          f.push(buttonGenerator(fieldVar.[i]));
        }
      }
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
