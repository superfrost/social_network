import React from "react";
import CreatePost from './CreatePost'
import { addPostActionCreator, onChangeTextareaActionCreator } from "../../../redux/profileReduser";
import StoreContext from "../../../StoreContex";

const CreatePostContainer = (props) => {

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState()

        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };
      
        let onChangeTextarea = (text) => {
          let action = onChangeTextareaActionCreator(text);
          store.dispatch(action);
        }
        
        return (
          <CreatePost 
            posts={state.profilePage}
            //dispatch={props.dispatch}
            addPost={addPost} 
            onChangeTextarea={onChangeTextarea}
          />)
        }
      }
    </StoreContext.Consumer>
  );
};

export default CreatePostContainer
