import types from './types'

const INITIAL_STATE = {
  totalPeopleCount: 0,
  people: [],
  personVehicles: [],
  isLoading: false,
  isLoadingDialog: false,
  page: 0,
  searchString: '',
  selectedPerson: null
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return { ...state, isLoading: true }

    case types.LOAD_DATA_SUCCESS:
      return { ...state, people: action.data.results, totalPeopleCount: action.data.count, page: action.page, isLoading: false }

    case types.LOAD_DATA_VEHICLES:
      return { ...state, isLoadingDialog: true }

    case types.LOAD_DATA_VEHICLES_SUCCESS:
      return { ...state, personVehicles: action.data, isLoadingDialog: false }

    case types.LOAD_DATA_VEHICLES_FAILED:
    case types.LOAD_DATA_FAILED:
      return { ...state, isLoading: false }

    case types.REMOVE_DATA:
      return { ...state, [action.entity]: [] }

    case types.SET_SEARCH:
      return { ...state, searchString: action.searchString }

    case types.SET_SELECTED_PERSON:
      return { ...state, selectedPerson: action.selectedPerson }

    default:
      return state
  }
}

export default homeReducer
