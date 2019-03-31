import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';

import HomeContainer from './app/home/HomeContainer';

const AppWrapper = styled.div``;

const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
   "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <AppWrapper className="App">
          <CssBaseline />
          <HomeContainer/>
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
