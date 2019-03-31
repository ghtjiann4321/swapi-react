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
import Spinner from '../spinner/Spinner'

const StyledButton = styled(Button)`
  background: #333 !important;
  color: #fff !important;
  text-transform: uppercase;
  font-size: 10px !important;
  box-shadow: none !important;
  padding: 7px 14px !important;

  &:hover {
    background: #fcb414 !important;
  }
`

const BtnIcon = styled(Icon)`
  margin-left: 4px;
  font-size: 16px !important;
`

const TableWrapper = styled(Table)`
  width: 100%;
  min-width: 1000px;

  thead tr th {
    background: #efefef;
    color: #222;
    text-transform: uppercase;
    font-size: 11px;
  }

  th,
  td {
    bordercolor: '#efefef !important';
  }
`

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
            {data.length <= 0 ? (
              <TableRow>
                <TableCell colSpan={4}>No Records Found...</TableCell>
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
