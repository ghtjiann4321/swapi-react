import React, { Component } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  height: 46px;
  border: none;
  width: 300px;
  padding: 0 20px;
  font-size: 16px;
  outline: none;
  margin-top: -3px;
  border-radius: 30px;
  box-shadow: none !important;
`;

export default class Search extends Component {
  render() {
    return (
      <SearchInput type="text" onChange={this.handleChangeInput} placeholder="Search a character..." />
    )
  }
}
