import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class Home extends Component {
  render() {
    return (
      <div>
        
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid key={value} item xs={11}>
                <Paper elevation={1} className={classes.container}>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
