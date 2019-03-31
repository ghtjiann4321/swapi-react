import React, { Component } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import Moment from 'react-moment'
import Spinner from '../spinner/Spinner'

import { StyledButton, BtnIcon, TableWrapper } from './styles'

export default class TableView extends Component {
  render() {
    const { data, isLoading } = this.props

    return (
      <div>
        <Spinner isLoading={isLoading} />
        <TableWrapper>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Vehicle Class</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.model}</TableCell>
                <TableCell>{row.manufacturer}</TableCell>
                <TableCell>{row.vehicle_class}</TableCell>
              </TableRow>
            ))}
            {!isLoading && data.length <= 0 ? (
              <TableRow>
                <TableCell colSpan={4}>No vehicles found...</TableCell>
              </TableRow>
            ) : (
              ''
            )}
          </TableBody>
        </TableWrapper>
      </div>
    )
  }
}
