// import { conditionalExpression } from "@babel/types";

export const REQUESTING = "REQUESTING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";
export function userRequesting() {
  return {
    type: USER_REQUEST,
    status: REQUESTING
  };
}

export function userSuccess(data) {
  return {
    type: USER_SUCCESS,
    status: SUCCESS,
    userdata: data
  };
}

export function userFailure(error) {
  return {
    type: USER_FAILURE,
    status: FAILURE,
    usererror: error
  };
}

export function card() {
  return async dispatch => {
    try {
      dispatch(userRequesting());
      const result = await fetch(`https://api.github.com/users`);

      const resultJson = await result.json();
      console.log(resultJson);
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(userSuccess(resultJson));
    } catch (e) {
      dispatch(userFailure(e.message));
    }
  };
}
