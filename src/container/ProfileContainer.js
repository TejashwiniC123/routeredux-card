import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { profile } from "../action/profile.action";
import Profile from "../Profile";
const DispatchToProps = dispatch => {
  return {
    dataUser: () => {
      dispatch(profile());
    }
  };
};

const StateToProps = state => {
  return {
    userData1: state.profileReducer.userData
  };
};

const UserProfilecontainer = withRouter(
  connect(
    StateToProps,
    DispatchToProps
  )(Profile)
);
export default UserProfilecontainer;
