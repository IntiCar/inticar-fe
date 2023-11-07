const { ActionTypes } = require('./action');

function authReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return action.payload;
    case ActionTypes.LOGOUT:
      return null;
    case ActionTypes.REGISTER:
      return action.payload;
    default:
      return state;
  }
}

export default authReducer;
