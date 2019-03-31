import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent } from '@material-ui/core'
import TableViewVehicle from '../table-view/TableViewVehicle'
import PropTypes from 'prop-types'

export default class DialogView extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    isLoading: PropTypes.bool,
    person: PropTypes.string,
    personVehicles: PropTypes.array,
    open: PropTypes.bool,
    maxWidth: PropTypes.oneOf(['lg', 'xl', 'sm','xs', 'md'])
  }

  handleClose = () => {
    this.props.onClose()
  }

  render() {
    const { person, personVehicles, isLoading, ...other } = this.props

    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'} {...other}>
          <DialogTitle>{person ? `${person}'s Vehicles` : ''}</DialogTitle>
          <DialogContent>
            <TableViewVehicle data={personVehicles} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
