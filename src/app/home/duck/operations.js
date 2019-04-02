import Actions from './actions'

const loadData = Actions.loadData
const loadDataSuccess = Actions.loadDataSuccess
const loadDataFailed = Actions.loadDataFailed
const loadDataVehicles = Actions.loadDataVehicles
const loadDataVehiclesSuccess = Actions.loadDataVehiclesSuccess
const loadDataVehiclesFailed = Actions.loadDataVehiclesFailed
const removeData = Actions.removeData
const setSearch = Actions.setSearch
const setSelectedPerson = Actions.setSelectedPerson

export default {
  loadData,
  loadDataSuccess,
  loadDataFailed,
  loadDataVehicles,
  loadDataVehiclesSuccess,
  loadDataVehiclesFailed,
  removeData,
  fetchData,
  fetchDataVehicles,
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

export function fetchDataVehicles(urls) {
  return dispatch => {
    dispatch(loadDataVehicles())

    try {
      const data = Promise.all(urls.map(url => fetch(url).then(response => response.json())))

      data.then(vehicles => {
        dispatch(loadDataVehiclesSuccess(vehicles))
      })
    } catch (error) {
      dispatch(loadDataVehiclesFailed(error))
    }
  }
}
