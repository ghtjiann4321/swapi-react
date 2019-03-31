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
          <DialogContent>
            <PosDiv>
              <SpinnerOverlay>
                <div>
                  <Spinner className={'spinner'} />
                </div>
                <SpinnerText variant="body1">Loading Vehicles...</SpinnerText>
              </SpinnerOverlay>

              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Manufacturer</TableCell>
                    <TableCell>Vehicle Class</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loadComplete &&
                    vehicles.map(row => (
                      <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.model}</TableCell>
                        <TableCell>{row.manufacturer}</TableCell>
                        <TableCell>{row.vehicle_class}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </PosDiv>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}
