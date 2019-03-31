import React, { Component } from 'react'

export default class DialogView extends Component {
  handleClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
          <DialogTitle id="simple-dialog-title">{person ? `${person.name}'s Vehicles` : ''}</DialogTitle>
          <DialogContent>s</DialogContent>
        </Dialog>
      </div>
    )
  }
}
