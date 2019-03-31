import { Button, Table, Icon } from '@material-ui/core'
import styled from 'styled-components'

export const TableContent = styled.div`
  border: 1px solid #efefef;
  border-radius: 6px;
`

export const StyledButton = styled(Button)`
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

export const BtnIcon = styled(Icon)`
  margin-left: 4px;
  font-size: 16px !important;
`

export const TableWrapper = styled(Table)`
  width: 100%;
  min-width: 1000px;

  thead tr th {
    background: #efefef;
    color: #222;
    text-transform: uppercase;
    font-size: 11px;

    &:first-child {
      border-radius: 6px 0 0 0;
    }

    &:last-child {
      border-radius: 0 6px 0 0;
    }
  }

  th,
  td {
    bordercolor: '#efefef !important';
  }
`
