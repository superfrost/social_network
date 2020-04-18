const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const NEW_MESSAGE_TEXT_ON_CHANGE = 'NEW-MESSAGE-TEXT-ON-CHANGE';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let time = new Date()
            let timeNow = `${time.getUTCDate()}-${time.getUTCMonth()}-${time.getUTCFullYear()} ${time.getUTCHours()}:${time.getUTCMinutes()}`
            
            let newMessage = {
                id: 17, 
                person_id: 1, 
                date: timeNow, 
                message: state.newMessageText
            };
            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;
        case NEW_MESSAGE_TEXT_ON_CHANGE :
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return { type: ADD_NEW_MESSAGE }
};

export const OnChangeTextInTextareaActionCreator = (text) => {
    return { type: NEW_MESSAGE_TEXT_ON_CHANGE, text }
};

export default dialogsReduser;