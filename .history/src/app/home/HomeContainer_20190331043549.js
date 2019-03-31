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
  const removeData = entity => dispatch(homeOperations.removeData(entity))
  const setLoading = toggle => dispatch(homeOperations.setLoading(toggle))
  const setSearch = searchString => dispatch(homeOperations.setSearch(searchString))
  const setSelectedPerson = person => dispatch(homeOperations.setSelectedPerson(person))

  return { removeData, setLoading, fetchData, setSearch, setSelectedPerson, fetchDataVehicle }
}

export const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
