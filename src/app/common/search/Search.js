import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { debounce } from 'lodash'

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
`
SearchInput.displayName = 'SearchInput'

export default class Search extends Component {
  static propTypes = {
    onChange: PropTypes.func
  }

  handleChange = () => event => {
    this.throttleInput(event.target.value)
  }

  throttleInput = debounce(val => {
    this.props.onChange(val)
  }, 300)

  render() {
    return <SearchInput type="text" onChange={this.handleChange()} placeholder="Search a character..." />
  }
}
