import React, { PureComponent } from 'react'
import './Spinner.css'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import { SpinnerText, SpinnerContent} from './styles'

export default class Spinner extends PureComponent {
  render() {
    const { isLoading } = this.props

    const Spinner = styled.div`
      background: #fcb414;
    `

    const SpinnerOverlay = styled.div`
      opacity: ${isLoading ? 1 : 0};
      visibility: ${isLoading ? 'visible' : 'hidden'};
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 1.25s linear;
      -moz-transition: all 1.25s linear;
      -webkit-transition: all 1.25s linear;
      z-index: 99;
    `

    const SpinnerText = styled(Typography)`
      margin-left: 12px !important;
      text-transform: uppercase;
      font-weight: bold !important;
    `

    return (
      <div>
        <SpinnerOverlay>
          <div>
            <SpinnerContainer className={'spinner'} />
          </div>
          <SpinnerText variant="body1">Loading...</SpinnerText>
        </SpinnerOverlay>
      </div>
    )
  }
}
