import React from "react";
import { addMessage } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

let mapStateToProps = (state) => {
  return {
    state: state.messagePage,
  }
};

export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Dialogs);
