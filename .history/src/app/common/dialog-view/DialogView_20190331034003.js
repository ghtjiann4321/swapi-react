import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent, Icon, Fab } from '@material-ui/core'
import TableViewVehicle from '../table-view/TableViewVehicle'
import styled from 'styled-components'

export default class DialogView extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    onExited: PropTypes.func,
    isLoading: PropTypes.bool,
    person: PropTypes.string,
    personVehicles: PropTypes.array,
    open: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['lg', 'xl', 'sm', 'xs', 'md']).isRequired
  }

  handleClose = () => {
    this.props.onClose()
  }

  render() {
    const { person, personVehicles, isLoading, ...other } = this.props

    const CloseBtn = styled(div)`
      position: absolute;
      top: 0;
      right: 0;
    `

    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'} {...other}>
          <DialogTitle>{person ? `${person}'s Vehicles` : ''}</DialogTitle>
          <CloseBtn>
            <Fab size="small">
              <Icon>open_in_new</Icon>
            </Fab>
          </CloseBtn>
          <DialogContent>
            <TableViewVehicle data={personVehicles} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
