import {makeStyles} from '@material-ui/core/styles';
// Primary color: blue, 2nd: eggshell
export const primaryColor = '#0066ff';
export const secondaryFontColor = '#fdfdf8';

// think css
export const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '1.5em',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    textDecorationStyle: 'none',
    height: '200px',
    maxHeight: '250px',
  },
  media: {
    height: '150px',
    maxHeight: '200px',
    width: '150px',
    maxWidth: '200px',
  },
});
