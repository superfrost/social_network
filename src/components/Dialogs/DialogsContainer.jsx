import React from "react";
import {
  addMessageActionCreator,
  OnChangeTextInTextareaActionCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    state: state.messagePage,
    // isAuth: state.auth.isAuth,
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
    OnChangeTextInTextarea: (text) => {
      let action = OnChangeTextInTextareaActionCreator(text);
      dispatch(action);
    }
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
