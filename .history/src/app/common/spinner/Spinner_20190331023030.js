import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Spinner.css'
import styled from 'styled-components'

import { SpinnerText, SpinnerOverlay } from './styles'

export default class Spinner extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  render() {
}
