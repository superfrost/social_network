const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT_ON_CHANGE = 'NEW-POST-TEXT-ON-CHANGE';

const profileReduser = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let time = new Date()
            let timeNow = `${time.getUTCDate()}-${time.getUTCMonth()}-${time.getUTCFullYear()} ${time.getUTCHours()}:${time.getUTCMinutes()}`
            let newPost = {
                id: 17,
                person_id: 1,
                date: timeNow,
                message: state.newPostText,
                like_count: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case NEW_POST_TEXT_ON_CHANGE:
            state.newPostText = action.text;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
};

export const onChangeTextareaActionCreator = (text) => {
    return { type: NEW_POST_TEXT_ON_CHANGE, text }
};

export default profileReduser;