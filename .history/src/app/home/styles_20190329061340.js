import { Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'

export const PaperWrapper = styled(Paper)`
  margin: 60px 0;
  position: relative;
`

export const PaperHeader = styled(Typography)`
  text-align: left;
  padding: 12px 20px;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  color: #fff !important;
  font-weight: 200 !important;
  border-radius: 4px 4px 0 0;
  background: #f26924;
  background: -moz-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f26924), color-stop(100%, #fcb414));
  background: -webkit-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -o-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -ms-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: linear-gradient(45deg, #f26924 0%, #fcb414 100%);
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: #fff;
    margin-left: 24px;
    font-weight: 200;
  }
`

export const Logo = styled.svg`
  height: 60px;
  fill: #fff;
`

export const WrapperPos = styled.div`
  position: relative;
  overflow-y: auto;
`
