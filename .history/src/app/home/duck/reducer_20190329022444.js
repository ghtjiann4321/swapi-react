import types from './types';

const INITIAL_STATE = {
  totalPeopleCount: 0,
  people: [],
  personVehicles: [],
  isLoadingDialog: false,
  page: 0,
  searchString: ''
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOAD_DATA:
      return { ...state, isLoading: true }

    case types.LOAD_DATA_SUCCESS:
      let data;
      let peopleState = {};

      if (action.entity === 'people') {
        data = action.people.results
        peopleState = { totalPeopleCount: action.people.count, page: action.page }
      } else {
        data = [...state.vehicles, action.vehicle]
      }

      return { ...state, [action.entity]: data, ...peopleState, isLoading: false }

    case types.LOAD_DATA_FAILED:
      return { ...state, isLoading: false }

    case types.REMOVE_DATA:
      return { ...state, [action.entity]: [] }

    case types.SET_LOADING:
      return { ...state, isLoadingDialog: action.isLoadingDialog }

    default:
      return state
  }
}
