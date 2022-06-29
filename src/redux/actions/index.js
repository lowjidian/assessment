export const GET_REPOSITORIES_REQUEST = 'repositories/GET_REPOSITORIES_REQUEST';
export const GET_REPOSITORIES_SUCCESS = 'repositories/GET_REPOSITORIES_SUCCESS';
export const GET_REPOSITORIES_FAILURE = 'repositories/GET_REPOSITORIES_FAILURE';
export const SEARCH_PARAMS_CHANGE = 'repositories/SEARCH_PARAMS_CHANGE';

export const getRepositories = () => {
  return {
    type: GET_REPOSITORIES_REQUEST,
  };
};

export const searchParamsChange = searchParams => {
  return {
    type: SEARCH_PARAMS_CHANGE,
    searchParams: searchParams,
  };
};
