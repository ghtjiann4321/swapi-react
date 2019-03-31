import React, { Component } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Search from '../common/search/Search'
import TableView from '../common/table-view/TableView'
import DialogView from '../common/dialog-view/DialogView'

const PaperWrapper = styled(Paper)`
  margin: 60px 0;
  overflow-y: auto;
  position: relative;
`

const PaperHeader = styled(Typography)`
  text-align: left;
  padding: 12px 20px;
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  color: #fff !important;
  font-weight: 200 !important;
  background: #f26924;
  background: -moz-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f26924), color-stop(100%, #fcb414));
  background: -webkit-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -o-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: -ms-linear-gradient(45deg, #f26924 0%, #fcb414 100%);
  background: linear-gradient(45deg, #f26924 0%, #fcb414 100%);
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  .title {
    color: #fff;
    margin-left: 24px;
    font-weight: 200;
  }
`

const Logo = styled.svg`
  height: 60px;
  fill: #fff;
`

const apiRootUrl = 'https://swapi.co/api'

export default class Home extends Component {
  state = {
    open: false
  }

  componentDidMount() {
    this.props.fetchData(`${apiRootUrl}/people/?page=1`, 1, 'people')
  }

  handleChangeInput = val => {
    this.props.setSearch(val)
    this.props.fetchData(`${apiRootUrl}/people/?search=${val}&page=1`, 1, 'people')
  }

  handleChangePage = page => {
    const newPage = page + 1
    const val = this.props.searchString
    this.props.fetchData(`${apiRootUrl}/people/?search=${val}&page=${newPage}`, newPage, 'people')
  }

  handleClickOpenDialog = person => {
    this.props.setSelectedPerson(person)
    this.setState({ open: true })
    this.loadVehicles(person)
  }

  handleCloseDialog = () => {
    this.setState({ open: false })
  }

  handleExited = () => {
    this.props.removeData('personVehicles')
  }

  /**
   * Fetch a person's vehicle in parallel using Promise.all()
   * @param person the selected person
   */
  loadVehicles = person => {
    if (person.vehicles.length > 0) {
      let requestArr = []
      this.props.setLoading(true)

      // Loop thru all person's vehicle and push to array
      for (let i = 0; i < person.vehicles.length; i++) {
        const url = person.vehicles[i]
        requestArr.push(this.props.fetchData(url, 0, 'personVehicles'))
      }

      // Wait for all promise to complete
      Promise.all(requestArr)
        .then(() => {
          setTimeout(() => {
            this.props.setLoading(false)
          }, 1000)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    const { people, totalPeopleCount, page, isLoading, selectedPerson, isLoadingDialog, personVehicles } = this.props

    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={11}>
            <PaperWrapper elevation={1}>
              <PaperHeader variant="h4">
                <LogoWrapper>
                  <Logo viewBox="0 0 189.333 107.333">
                    <path d="M148.175,66.501c0.182,3.29,0.787,7.427,6.254,12.398 c4.987,4.533-2.469,3.289-3.218,3.289c0,0-11.689-0.012-14.726-0.012c-3.036, 0-4.847-1.822-4.847-1.822c4.119,0,7.772-6.001, 7.772-12.145s-6.001-11.378-10.809-11.378s-26.891,0-26.891, 0v24.791h-3.235l-7.001-25H53.642l-3.795,12.651l-3.795-12.651H31.377l-3.289, 12.651l-3.542-12.651H10.567l11.196,37.952h11.386l5.495-17.964l4.878, 17.964h11.133l7.422-25.302h5.676l-7.468,25.294h12.469l2.024-5.313h13.156l1.953, 5.313l25.488-0.024V82.125c0,0,5.819,6.832,8.855,9.615c3.036,2.783,3.29,3.036,7.409, 3.036l29.895-0.202c4.301,0,10.808-3.977,10.808-10.555c0-2.647, 0.052-4.107-3.058-7.607l-4.734-5.609c-2.712-2.53-0.233-2.795, 2.044-2.795h16.391V56.622h-25.57C150.836,56.622,147.994,63.212,148.175,66.501zM77.561, 80.145l4.301-13.916l4.047,13.916H77.561z M124.048,73.27c-3.471,0-8.673,0-8.673,0v-6.832c0,0, 5.89,0,8.673,0C128.024,66.438,128.711,73.27,124.048,73.27z" />
                    <path d="M166.341,39.947c-4.807,0-4.807-1.771-4.807-1.771c4.119,0,7.772-6.001, 7.772-12.145c0-6.143-6.001-11.377-10.808-11.377s-26.891,0-26.891, 0v25.293h-3.279l-7.083-25.293h-77.47c-6.579,0-9.796,6.317-9.615,9.607c0.182,3.289,0.787,7.427, 6.254,12.397c4.987,4.533-2.469,3.289-3.218,3.289c-3.795,0-26.629,0-26.629,0v12.65c0,0,32.702, 0,37.003,0c4.301,0,9.796-3.977,9.796-10.556c0-2.646, 1.012-4.372-2.098-7.872l-4.734-5.609c-2.712-2.53,0.324-2.53,2.602-2.53c1.265,0,15.624,0, 15.624,0v26.566h12.39V26.031h16.748l-7.845,26.566h12.469l2.024-5.313h13.157l1.953, 5.313h25.614v-12.65c0,0,5.819,6.831,8.855,9.614s3.289,3.036,7.409,3.036c4.119,0,21.451,0, 21.451,0v-12.65C182.984,39.947,171.148,39.947,166.341,39.947z M107.329, 38.176l4.301-13.916l4.048,13.916H107.329z M153.943,31.092c-3.471,0-8.674,0-8.674,0v-6.831c0,0, 5.89,0,8.674,0C157.919,24.261,158.606,31.092,153.943,31.092z" />
                  </Logo>
                  <Typography className={'title'} variant="h4">
                    Character List
                  </Typography>
                </LogoWrapper>
                <Search onChange={this.handleChangeInput} />
              </PaperHeader>

              <TableView
                data={people}
                dataCount={totalPeopleCount}
                page={page}
                onChangePage={this.handleChangePage}
                onClickButton={this.handleClickOpenDialog}
                isLoading={isLoading}
              />
            </PaperWrapper>
          </Grid>
        </Grid>

        <DialogView
          fullWidth={true}
          maxWidth={'lg'}
          open={this.state.open}
          person={selectedPerson}
          personVehicles={personVehicles}
          isLoading={isLoadingDialog}
          onExited={this.handleExited}
          onClose={this.handleCloseDialog}
        />
      </div>
    )
  }
}
