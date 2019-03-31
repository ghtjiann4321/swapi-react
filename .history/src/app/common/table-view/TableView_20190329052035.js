import React, { Component } from 'react'
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
  handleChangePage = (event, page) => {
    this.props.onChangePage(page)
  }

  handleClickOpenDialog = person => {
    this.props.onClickButton(person)
  }

  render() {
    const { data, dataCount, page, isLoading } = this.props

    return (
      <div>
        <Spinner isLoading={isLoading} />
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
            {!isLoading && data.length <= 0 ? (
              <TableRow>
                <TableCell colSpan={4}>No characters found...</TableCell>
              </TableRow>
            ) : (
              's'
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                labelRowsPerPage=""
                rowsPerPageOptions={[]}
                colSpan={12}
                rowsPerPage={10}
                count={dataCount}
                page={page - 1}
                SelectProps={{
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
