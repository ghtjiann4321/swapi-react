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
      let data
      let peopleState = {}

      if (action.entity === 'people') {
        data = action.data.results
        peopleState = { totalPeopleCount: action.data.count, page: action.page }
      } else {
        data = [...state.personVehicles, action.data]
      }

      return { ...state, [action.entity]: data, ...peopleState, isLoading: false }

    case types.LOAD_DATA_FAILED:
      return { ...state, isLoading: false }

    case types.REMOVE_DATA:
      return { ...state, [action.entity]: [] }

    case types.SET_LOADING:
      return { ...state, isLoadingDialog: action.isLoadingDialog }

    case types.SET_SEARCH:
      return { ...state, searchString: action.searchString }

    case types.SET_SELECTED_PERSON:
      return { ...state, selectedPerson: action.selectedPerson }

    default:
      return state
  }
}

export default homeReducer
