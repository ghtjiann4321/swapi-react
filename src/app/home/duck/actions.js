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
  type: types.LOAD_PEOPLE_FAILED,
  isLoading: false,
  error
})

const loadDataVehicle = () => ({
  type: types.LOAD_DATA_VEHICLE
})

const loadDataVehicleSuccess = data => ({
  type: types.LOAD_DATA_VEHICLE_SUCCESS,
  isLoading: false,
  data
})

const loadDataVehicleFailed = error => ({
  type: types.LOAD_DATA_VEHICLE_FAILED,
  isLoading: false,
  error
})

const removeData = entity => ({
  type: types.REMOVE_DATA,
  entity
})

const setLoading = toggle => ({
  type: types.SET_LOADING,
  isLoadingDialog: toggle
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
  loadDataVehicle,
  loadDataVehicleSuccess,
  loadDataVehicleFailed,
  removeData,
  setLoading,
  setSearch,
  setSelectedPerson
}
