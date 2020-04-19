import React from "react";
import {
  addMessageActionCreator,
  OnChangeTextInTextareaActionCreator,
} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
