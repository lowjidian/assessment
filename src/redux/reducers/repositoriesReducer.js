import {
  GET_REPOSITORIES_REQUEST,
  GET_REPOSITORIES_SUCCESS,
  GET_REPOSITORIES_FAILURE,
  SEARCH_PARAMS_CHANGE,
} from '../actions/index';

const initialState = {
  repositories: [],
  isLoading: false,
  error: null,
  searchParams: '',
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOSITORIES_REQUEST:
      return {...state, isLoading: true};
    case GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repositories: action.repositories,
        error: null,
      };
    case GET_REPOSITORIES_FAILURE:
      return {...state, isLoading: false, error: action.message};
    case SEARCH_PARAMS_CHANGE:
      return {
        ...state,
        searchParams: action.searchParams,
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
