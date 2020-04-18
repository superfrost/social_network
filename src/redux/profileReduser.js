const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT_ON_CHANGE = 'NEW-POST-TEXT-ON-CHANGE';

let initialState = {
    posts: [
        {id: 1, person_id: 1, date: '15-03-2020 17:13', message: "Hi it's me !!!", like_count: 17},
        {id: 2, person_id: 2, date: '14-03-2020 16:07', message: "Where are you?", like_count: 4},
        {id: 3, person_id: 3, date: '13-03-2020 09:57', message: "Are you kidding me?", like_count: 55},
        {id: 4, person_id: 4, date: '12-03-2020 13:49', message: "There were white out conditions in the town; subsequently, the roads were impassable.", like_count: 32},
        {id: 5, person_id: 5, date: '11-03-2020 11:45', message: "There's a reason that roses have thorns.", like_count: 43},
        {id: 6, person_id: 6, date: '10-03-2020 20:45', message: "Whenever he saw a red flag warning at the beach he grabbed his surfboard.", like_count: 9},
        {id: 7, person_id: 7, date: '09-03-2020 13:36', message: "Choosing to do nothing is still a choice, after all.", like_count: 13},
        {id: 8, person_id: 8, date: '08-03-2020 12:20', message: "She saw no irony asking me to change but wanting me to accept her for who she is.", like_count: 11},
        {id: 9, person_id: 2, date: '07-03-2020 15:41', message: "Toddlers feeding raccoons surprised even the seasoned park ranger.", like_count: 79},
        {id: 10, person_id: 4, date: '06-03-2020 18:43', message: "She finally understood that grief was her love with no place for it to go.", like_count: 23},
        {id: 11, person_id: 3, date: '05-03-2020 13:20', message: "The pigs were insulted that they were named hamburgers.", like_count: 45},
        {id: 12, person_id: 6, date: '04-03-2020 16:17', message: "He used to get confused between soldiers and shoulders, but as a military man, he now soldiers responsibility.", like_count: 22},
        {id: 13, person_id: 7, date: '03-03-2020 15:00', message: "Yeah, I think it's a good environment for learning English.", like_count: 56},
        {id: 14, person_id: 1, date: '02-03-2020 11:10', message: "Nobody questions who built the pyramids in Mexico.", like_count: 73},
        {id: 15, person_id: 8, date: '01-03-2020 13:40', message: "When he encountered maize for the first time, he thought it incredibly corny.", like_count: 5},
        {id: 16, person_id: 6, date: '20-02-2020 13:40', message: "Hey Lera", like_count: 34},
    ],
    friends: [
        {id: 1, name: 'Anton', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fclooney-george-image.jpg&f=1&nofb=1'},
        {id: 2, name: 'Lera', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fzoe-saldana-5.jpg&f=1&nofb=1'},
        {id: 3, name: 'Nick', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fdicaprio-l-image.jpg&f=1&nofb=1'},
        {id: 4, name: 'Ben', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fben-stiller-4.jpg&f=1&nofb=1'},
        {id: 5, name: 'Kate', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fbanks-tyra-image.jpg&f=1&nofb=1'},
        {id: 6, name: 'John', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fdwayne-johnson-9.jpg&f=1&nofb=1'},
        {id: 7, name: 'B.Kingsley', photoSrc: 'https://www.famousbirthdays.com/thumbnails/kingsley-ben-large.jpg'},
        {id: 8, name: 'Will Smit', photoSrc: 'https://www.famousbirthdays.com/headshots/will-smith-1.jpg'}
    ],
    myProfile: {
        my_id: 11,
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.NylsCxMY8dDSzJ_hEQtC0gAAAA%26pid%3DApi&f=1',
        name:'Terminator',
        education: "PhD",
        work: 'DataScientist'
    },
    newPostText: "Hi it's newPostTexttt",
};

const profileReduser = (state = initialState, action) => {
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