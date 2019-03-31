import { Button, Table, Icon } from "@material-ui/core";

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

export default {
  StyledButton,
  BtnIcon,
  TableWrapper
}
