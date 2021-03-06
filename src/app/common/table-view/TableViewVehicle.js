import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Spinner from '../spinner/Spinner'

import { TableWrapper, TableContent, TableCellBold, WrapperOverflow } from './styles'

export default class TableView extends Component {
  static propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    data: []
  }

  render() {
    const { data, isLoading } = this.props

    return (
      <WrapperOverflow>
        <Spinner isLoading={isLoading} />
        <TableContent>
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
                  <TableCellBold>{row.name}</TableCellBold>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.manufacturer}</TableCell>
                  <TableCell>{row.vehicle_class}</TableCell>
                </TableRow>
              ))}
              {!isLoading && data.length <= 0 ? (
                <TableRow>
                  <TableCell colSpan={4}>No vehicles found...</TableCell>
                </TableRow>
              ) : null}
            </TableBody>
          </TableWrapper>
        </TableContent>
      </WrapperOverflow>
    )
  }
}
