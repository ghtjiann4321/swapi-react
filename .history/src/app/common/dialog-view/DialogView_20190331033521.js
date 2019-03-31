import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import { DialogContent, Icon } from '@material-ui/core'
import TableViewVehicle from '../table-view/TableViewVehicle'

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

    return (
      <div>
        <Dialog onClose={this.handleClose} fullWidth={true} maxWidth={'xs'} {...other}>
          <DialogTitle>{person ? `${person}'s Vehicles` : ''}</DialogTitle>
          <Fab size="small" color="secondary" aria-label="Add" className={classes.margin}>
            <Icon />
          </Fab>
          <DialogContent>
            <TableViewVehicle data={personVehicles} isLoading={isLoading} />
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
