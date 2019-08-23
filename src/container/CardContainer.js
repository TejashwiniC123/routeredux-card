import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { card } from "../action/card.action";
import { profile } from "../action/profile.action";
import Card from "../Card";

const DispatchToProps = dispatch => {
  return {
    dataUser: () => {
      dispatch(card());
    },
    getProfile: url => {
      dispatch(profile(url));
    }
  };
};

const StateToProps = state => {
  console.log(state);
  return {
    users: state.cardReducer
  };
};

const CardContainer = withRouter(
  connect(
    StateToProps,
    DispatchToProps
  )(Card)
);
export default CardContainer;
