import React, { PureComponent } from 'react'
import './Spinner.css'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

export {} from './styles'

export default class Spinner extends PureComponent {
  render() {

    return (
      <div>
        <SpinnerOverlay>
          <div>
            <Spinner className={'spinner'} />
          </div>
          <SpinnerText variant="body1">Loading...</SpinnerText>
        </SpinnerOverlay>
      </div>
    )
  }
}
