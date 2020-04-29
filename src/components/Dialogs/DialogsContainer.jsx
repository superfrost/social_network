import React from "react";
import {
  addMessageActionCreator,
  OnChangeTextInTextareaActionCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

let mapStateToProps = (state) => {
  return {
    state: state.messagePage,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
