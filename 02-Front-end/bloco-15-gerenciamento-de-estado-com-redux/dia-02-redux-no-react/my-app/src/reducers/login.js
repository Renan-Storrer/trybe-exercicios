import { LOGIN } from "../actions/types";

const INITIAL_STATE = {
  email: '',
  password: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload.userData;
    default:
      return state
  } 
}

export default loginReducer;
