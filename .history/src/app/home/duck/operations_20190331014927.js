import Actions from './actions'

const loadData = Actions.loadData
const loadDataSuccess = Actions.loadDataSuccess
const loadDataFailed = Actions.loadDataFailed
const loadDataVehicle = Actions.loadDataVehicle
const loadDataVehicleSuccess = Actions.loadDataVehicleSuccess
const loadDataVehicleFailed = Actions.loadDataVehicleFailed
const removeData = Actions.removeData
const setLoading = Actions.setLoading
const setSearch = Actions.setSearch
const setSelectedPerson = Actions.setSelectedPerson

export default {
  loadData,
  loadDataSuccess,
  loadDataFailed,
  loadDataVehicle,
  loadDataVehicleSuccess,
  loadDataVehicleFailed,
  removeData,
  setLoading,
  fetchData,
  setSearch,
  setSelectedPerson
}

export function fetchData(url, page) {
  return dispatch => {
    dispatch(loadData())
    return fetch(url)
      .then(response => response.json(), error => dispatch(loadDataFailed(error)))
      .then(response => dispatch(loadDataSuccess(response, page)))
  }
}

export function fetchDataVehicle(url) {
  return dispatch => {
    dispatch(loadDataVehicle())
    return fetch(url)
      .then(response => response.json(), error => dispatch(loadDataVehicleFailed(error)))
      .then(response => dispatch(loadDataVehicleSuccess(response)))
  }
}
