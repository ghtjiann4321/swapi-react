import React, { Component } from 'react';
import './App.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const AppWrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <AppWrapper className="App">
          <CssBaseline />
          <ListTable />
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
