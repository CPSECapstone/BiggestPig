import Button from '@material-ui/core/Button';

// TODO incorporate target with cookies
//  add more fields to customize buttons
export default function buttonGenerator(props) {
  return (<Button variant='outlined' onClick=
    {() => {
      alert('clicked');
    }
    }>{props.action}</Button>);
}
