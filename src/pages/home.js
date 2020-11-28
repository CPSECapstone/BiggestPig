import {useStyles} from '../styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid item>
          <Paper className={classes.paper}>
            <Card className={classes.card} component={Link} to="/demo">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/demo2.gif"
                  title="Demo 1 Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                                        Demo 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Card className={classes.card} component={Link} to="/demo2">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/demo2.gif"
                  title="Demo 2 Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                                        Demo 2
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <Card className={classes.card} component={Link} to="/demo">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/demo2.gif"
                  title="Demo 2 Logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                                        Demo 1
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
