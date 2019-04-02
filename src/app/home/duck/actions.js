import types from './types.js'

const loadData = () => ({
  type: types.LOAD_DATA,
  isLoading: true
})

const loadDataSuccess = (data, page) => ({
  type: types.LOAD_DATA_SUCCESS,
  isLoading: false,
  data,
  page
})

const loadDataFailed = error => ({
  type: types.LOAD_DATA_FAILED,
  isLoading: false,
  error
})

const loadDataVehicles = () => ({
  type: types.LOAD_DATA_VEHICLES
})

const loadDataVehiclesSuccess = data => ({
  type: types.LOAD_DATA_VEHICLES_SUCCESS,
  isLoading: false,
  data
})

const loadDataVehiclesFailed = error => ({
  type: types.LOAD_DATA_VEHICLES_FAILED,
  isLoading: false,
  error
})

const removeData = entity => ({
  type: types.REMOVE_DATA,
  entity
})

const setSearch = searchString => ({
  type: types.SET_SEARCH,
  searchString: searchString
})

const setSelectedPerson = person => ({
  type: types.SET_SELECTED_PERSON,
  selectedPerson: person
})

export default {
  loadData,
  loadDataSuccess,
  loadDataFailed,
  loadDataVehicles,
  loadDataVehiclesSuccess,
  loadDataVehiclesFailed,
  removeData,
  setSearch,
  setSelectedPerson
}
