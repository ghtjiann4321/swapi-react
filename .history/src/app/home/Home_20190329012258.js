import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import styled from 'styled-components'

const PaperWrapper = styled(Paper)`
  margin: 60px 0;
  overflow-y: auto;
  position: relative;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
            <Grid container justify="center">
              <Grid item xs={11}>
                <PaperWrapper elevation={1}>

                </PaperWrapper>
              </Grid>
            </Grid>
      </div>
    )
  }
}
