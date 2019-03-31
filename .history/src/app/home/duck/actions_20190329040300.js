import types from './types.js';

const loadData = () => ({
  type: types.LOAD_DATA,
  isLoading: true
});

const loadDataSuccess = (data, page, entity) => ({
  type: types.LOAD_DATA_SUCCESS,
  isLoading: false,
  data,
  page,
  entity
});

const loadPeopleFailed = error => ({
  type: types.LOAD_PEOPLE_FAILED,
  isLoading: false,
  error
});

const removeData = entity => ({
  type: types.REMOVE_DATA,
  entity
});

const setLoading = toggle => ({
  type: types.SET_LOADING,
  isLoadingDialog: toggle
});

const setSearch = searchString => ({
  type: types.SET_SEARCH,
  searchString: searchString
});

const setSelectedPerson = person => ({
  type: types.SET_SELECTED_PERSON,
  selectedPerson: person
});

export default {
  loadData,
  loadDataSuccess,
  loadPeopleFailed,
  removeData,
  setLoading,
  setSearch,
  setSelectedPerson
}