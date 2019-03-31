import React, { Component } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent, withStyles } from '@material-ui/core'

export default class DialogView extends Component {
  handleClose = () => {
    this.props.onClose()
  }

  render() {
    const { person, ...other } = this.props

    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'}>
          <DialogTitle>{person ? `${person.name}'s Vehicles` : ''}</DialogTitle>
          <DialogContent>s</DialogContent>
        </Dialog>
      </div>
    )
  }
}
