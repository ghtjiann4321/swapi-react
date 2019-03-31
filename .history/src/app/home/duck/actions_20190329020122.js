import types from './types.js';

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

const loadPeopleFailed = (error) => ({
  type: LOAD_PEOPLE_FAILED,
  isLoading: false,
  error
})


export const removeVehicle = () => ({
  type: REMOVE_VEHICLE
})

export const setLoadingVehicle = toggle => ({
  type: SET_LOADING_VEHICLE,
  isLoadingVehicle: toggle
})