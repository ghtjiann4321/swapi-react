import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
