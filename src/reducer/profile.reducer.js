import * as profileAction from "../action/profile.action";

const profiledetails = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case profileAction.REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case profileAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userData: action.userdata
      });

    case profileAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.usererror
      });
    default:
      return state;
  }
};
export default profiledetails;
