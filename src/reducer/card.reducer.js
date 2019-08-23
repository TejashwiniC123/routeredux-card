import * as cardAction from "../action/card.action";

const userdetails = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case cardAction.REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case cardAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userData: action.userdata
      });

    case cardAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.usererror
      });
    default:
      return state;
  }
};
export default userdetails;
