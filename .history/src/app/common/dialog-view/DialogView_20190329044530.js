import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent } from '@material-ui/core'
import TableViewVehicle from '../table-view/TableViewVehicle'

export default class DialogView extends Component {
  handleClose = () => {
    this.props.onClose()
  }

  render() {
    const { person, isLoading, personVehicles, ...other } = this.props

    console.log(isLoading)

    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'} {...other}>
          <DialogTitle>{person ? `${person.name}'s Vehicles` : ''}</DialogTitle>
          <DialogContent>
            <TableViewVehicle data={personVehicles} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
