import actionTypes from '../constants/actionTypes';

const initialState = {
  records: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.GET_USERS_SUCCESS: {
      if (action.users) {
        return {
          ...state,
          loading: false,
          error: null,
          records: action.users
        };
      }
      return state;
    }
    case actionTypes.GET_USERS_ERROR:
      if (action.error) {
        return {
          ...state,
          loading: false,
          error: action.error
        };
      }
      return state;
    default:
      return state;
  }
}
