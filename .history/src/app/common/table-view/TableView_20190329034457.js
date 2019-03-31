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
import Spinner from './spinner/Spinner'

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
  handleChangePage = (event, page) => {
    this.props.onChangePage(page)
  }

  handleClickOpenDialog = person => {
    console.log(person)
  }

  render() {
    const { data, dataCount, page, isLoading } = this.props

    return (
      <div>
        <Spinner isLoading={isLoading}/>
        <TableWrapper>
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
            {data.map(row => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.mass}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>
                  <Moment format="DD/MM/YYYY hh:mm:ss A">{row.edited}</Moment>
                </TableCell>
                <TableCell align="right">
                  <StyledButton variant="contained" size="small" color="inherit" onClick={() => this.handleClickOpenDialog(row)}>
                    Show vehicles
                    <BtnIcon>open_in_new</BtnIcon>
                  </StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                labelRowsPerPage = ""
                rowsPerPageOptions={[]}
                colSpan = {12}
                rowsPerPage = {10}
                count = {dataCount}
                page = {page - 1}
                SelectProps = {{
                  native: true
                }}
                onChangePage={this.handleChangePage}
              />
            </TableRow>
          </TableFooter>
        </TableWrapper>
      </div>
    )
  }
}
