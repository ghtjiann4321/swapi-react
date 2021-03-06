import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import Moment from 'react-moment'
import Spinner from '../spinner/Spinner'

import { StyledButton, BtnIcon, TableWrapper, TableCellBold, WrapperOverflow } from './styles'

export default class TableView extends Component {
  static propTypes = {
    onChangePage: PropTypes.func,
    onClickButton: PropTypes.func,
    dataCount: PropTypes.number,
    page: PropTypes.number,
    data: PropTypes.array,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    data: []
  }

  handleChangePage = (event, page) => {
    this.props.onChangePage(page)
  }

  handleClickOpenDialog = person => {
    this.props.onClickButton(person)
  }

  render() {
    const { data, dataCount, page, isLoading } = this.props

    return (
      <WrapperOverflow>
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
                <TableCellBold>{row.name}</TableCellBold>
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
            ) : null}
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
      </WrapperOverflow>
    )
  }
}
