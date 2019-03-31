import Actions from './actions'

const apiRootUrl = 'https://swapi.co/api'

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

export function fetchData(url, page) {
  return dispatch => {
    dispatch(loadData())
    return fetch(apiRootUrl + url)
      .then(response => response.json(), error => dispatch(loadDataFailed(error)))
      .then(response => dispatch(loadDataSuccess(response, page)))
  }
}
