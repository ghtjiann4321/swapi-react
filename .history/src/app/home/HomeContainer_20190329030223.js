import { connect } from 'react-redux'
import Home from './Home'
import { homeOperations } from './duck'

const mapStateToProps = state => {
  const { totalPeopleCount, people, personVehicles, isLoadingDialog, isLoading, page, searchString } = state.home

  return {
    totalPeopleCount,
    people,
    personVehicles,
    isLoadingDialog,
    isLoading,
    page,
    searchString
  }
}

const mapDispatchToProps = dispatch => {
  const fetchData = (url, page, entity) => {
    dispatch(homeOperations.fetchData(url, page, entity))
  }
  const removeData = entity => dispatch(homeOperations.removeData(entity))
  const setLoading = toggle => dispatch(homeOperations.setLoading(toggle))

  return { removeData, setLoading, fetchData }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
