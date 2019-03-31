import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

const PaperWrapper = styled(Paper)`
  margin: 60px 0;
  overflow-y: auto;
  position: relative;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Grid item xs={11}>
                <Paper elevation={1}>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
