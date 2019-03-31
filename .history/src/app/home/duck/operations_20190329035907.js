import Actions from './actions'

const apiRootUrl = 'https://swapi.co/api'

const loadData = Actions.loadData
const loadDataSuccess = Actions.loadDataSuccess
const loadDataFailed = Actions.loadDataFailed
const removeData = Actions.removeData
const setLoading = Actions.setLoading
const setSearch = Actions.setSearch
const setSelectedPerson= Actions.setSelectedPerson

export default {
  loadData,
  loadDataSuccess,
  loadDataFailed,
  removeData,
  setLoading,
  fetchData,
  setSearch,
  setSelectedPerson
}

export function fetchData(url, page, entity) {
  return dispatch => {
    dispatch(loadData())
    return fetch(apiRootUrl + url)
      .then(response => response.json(), error => dispatch(loadDataFailed(error)))
      .then(response => dispatch(loadDataSuccess(response, page, entity)))
  }
}
