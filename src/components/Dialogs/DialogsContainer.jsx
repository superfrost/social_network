import React from "react";
import { addMessageActionCreator, OnChangeTextInTextareaActionCreator } from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContex";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      { 
        store => {
          let state = store.getState()

          let addMessage = () => {
            let action = addMessageActionCreator();
            store.dispatch(action)
          };

          let OnChangeTextInTextarea = (text) => {
            let action = OnChangeTextInTextareaActionCreator(text);
            store.dispatch(action)
          };

          return (
            <Dialogs
              state={state.messagePage}
              addMessage={addMessage}
              OnChangeTextInTextarea={OnChangeTextInTextarea}
            />);
        }
      }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;
