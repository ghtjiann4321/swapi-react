import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Spinner.css'
import styled from 'styled-components'

import { SpinnerText, SpinnerContent } from './styles'

const SpinnerOverlay = styled.div`
  opacity: ${props => (props.isLoading ? 1 : 0)};
  visibility: ${props => (props.isLoading ? 'visibile' : 'hidden')};
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  transition: all .3s;
  -moz-transition: all .3s;
  -webkit-transition: all .3s;
`

export default class Spinner extends PureComponent {
  static propTypes = {
    isLoading: PropTypes.bool
  }

  render() {
    return (
      <div>
        <SpinnerOverlay isLoading={this.props.isLoading}>
          <div>
            <SpinnerContent className={'spinner'} />
          </div>
          <SpinnerText variant="body1">Loading...</SpinnerText>
        </SpinnerOverlay>
      </div>
    )
  }
}
