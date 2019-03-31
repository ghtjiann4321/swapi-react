import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const App = styled.div``;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <App className="App">
          <CssBaseline />
          <ListTable />
        </App>
      </MuiThemeProvider>
    );
  }
}

export default App;
