import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import Moment from 'react-moment'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  .ico {
    margin-left: 4px;
    font-size: 16px;
  }
`

export default class TableView extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Edited</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.rows.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.mass}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>
                  <Moment format="DD/MM/YYYY hh:mm:ss A">{row.edited}</Moment>
                </TableCell>
                <TableCell align="right">
                  <StyledButton variant="contained" size="small" color="inherit" onClick={() => this.handleClickOpen(row)}>
                    Show vehicles
                    <Icon className={'ico'}>open_in_new</Icon>
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}
