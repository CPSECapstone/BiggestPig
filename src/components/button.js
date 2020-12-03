import Button from '@material-ui/core/Button';

// TODO incorporate target with cookies
//  add more fields to customize buttons
export default function buttonGenerator(props) {
  return (<Button onClick=
    {() => {
      alert('clicked');
    }
    }>{props.action}</Button>);
}
