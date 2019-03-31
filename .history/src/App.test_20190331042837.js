import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ShallowRenderer();

it('renders without crashing', () => {
  const div = document.createElement('div');
  renderer(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
