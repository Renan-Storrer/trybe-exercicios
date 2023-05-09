const INITIAL_STATE = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function dogReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REQUEST_IMAGE':
      return { ...state, isFetching: true };
    case 'GET_IMAGE':
      return { ...state, imagePath: action.payload, isFetching: false };
    case 'FAILED_REQUEST':
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

export default dogReducer;