import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components'

const PaperWrapper = styled(Paper)`
  margin: 60px 0;
  overflow-y: auto;
  position: relative;
`;

const PaperHeader = styled(Typography)`
  text-align: left;
  padding: 12px 20px;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  color: #fff !important;
  font-weight: 200 !important;
  background: #f26924;
  background: -moz-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f26924), color-stop(100%, #fcb414));
  background: -webkit-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -o-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -ms-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: linear-gradient(45deg, #f26924 0%, #fcb414 100%);
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
