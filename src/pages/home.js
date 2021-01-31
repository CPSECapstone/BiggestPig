import {useStyles} from '../styles';
import React from 'react';

import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  const classes = useStyles();

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
            <Card className={classes.card} component={Link} to="/vendor">
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/demo2.gif"
                  title="Demo 2 logo"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Grant's Demo
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
