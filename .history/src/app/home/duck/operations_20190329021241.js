import Actions from './actions'

const apiRootUrl = 'https://swapi.co/api/people'

const loadData = Actions.loadData
const loadDataSuccess = Actions.loadDataSuccess
const loadDataFailed = Actions.loadDataFailed
const removeData = Actions.removeData
const setLoading = Actions.setLoading

export default {
  loadData,
  loadDataSuccess,
  loadDataFailed,
  removeData,
  setLoading,
  fetchData
}

export function fetchData(url) {
  return dispatch => {
    dispatch(loadData())
    return fetch(apiRootUrl + url)
      .then(response => response.json(), error => dispatch(loadPeopleFailed(error)))
      .then(response => dispatch(loadDataSuccess(response, page)))
  }
}
