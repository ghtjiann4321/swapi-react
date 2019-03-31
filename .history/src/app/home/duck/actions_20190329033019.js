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

const setSearch = toggle => ({
  type: types.SET_SEARCH,
  isLoadingDialog: toggle
});

export default {
  loadData,
  loadDataSuccess,
  loadPeopleFailed,
  removeData,
  setLoading,
  setSearch
}