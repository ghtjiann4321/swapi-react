import { connect } from 'react-redux'
import Home from './Home'
import { homeOperations } from './duck'

const mapStateToProps = state => {
  const { totalPeopleCount, people, personVehicles, isLoadingDialog, isLoading, page, searchString, selectedPerson } = state.home

  return {
    totalPeopleCount,
    people,
    personVehicles,
    isLoadingDialog,
    isLoading,
    page,
    searchString,
    selectedPerson
  }
}

const mapDispatchToProps = dispatch => {
  const fetchData = (url, page) => {
    dispatch(homeOperations.fetchData(url, page))
  }
  const fetchDataVehicle = url => {
    dispatch(homeOperations.fetchDataVehicle(url))
  }
  const fetchDataVehicles = urls => {
    dispatch(homeOperations.fetchDataVehicles(urls))
  }
  const removeData = entity => dispatch(homeOperations.removeData(entity))
  const setSearch = searchString => dispatch(homeOperations.setSearch(searchString))
  const setSelectedPerson = person => dispatch(homeOperations.setSelectedPerson(person))

  return { removeData, fetchData, setSearch, setSelectedPerson, fetchDataVehicle, fetchDataVehicles }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
