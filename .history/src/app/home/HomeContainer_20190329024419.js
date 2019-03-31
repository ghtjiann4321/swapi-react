import { connect } from 'react-redux';
import Home from './Home';

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer
