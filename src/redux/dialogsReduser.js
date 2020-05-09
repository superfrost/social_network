const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

let initialState = {
    messageData: [
        {id: 1, person_id: 2, date: '10-04-2020 18:52', message: "Hi. Realy cool weather! Do you wanna go to park?"},
        {id: 2, person_id: 1, date: '09-04-2020 17:37', message: "Hi it's true. Meat me near my house in 15."},
        {id: 3, person_id: 2, date: '08-04-2020 16:22', message: "Ok I'll be there!"},
        {id: 4, person_id: 1, date: '07-04-2020 15:17', message: "Ok. See you :-)"},
        {id: 5, person_id: 2, date: '06-04-2020 14:49', message: "Love you love"},
        {id: 6, person_id: 1, date: '05-04-2020 13:56', message: "Me too kiss kiss kiss"},
        {id: 7, person_id: 3, date: '04-04-2020 12:14', message: "He man wat's up"},
        {id: 8, person_id: 1, date: '03-04-2020 11:14', message: "Cool dude!"},
        {id: 9, person_id: 3, date: '02-04-2020 10:02', message: "Do you wana play Mortal Combat?"},
        {id: 10, person_id: 1, date: '01-04-2020 09:05', message: "Eeeeee shure"},
        {id: 11, person_id: 7, date: '31-03-2020 18:21', message: "You have 5 for yout test. Great job!!!"},
        {id: 12, person_id: 1, date: '30-03-2020 17:47', message: "Ok thks"},
        {id: 13, person_id: 5, date: '29-03-2020 16:22', message: "wana get some party"},
        {id: 14, person_id: 1, date: '28-03-2020 15:12', message: "not today... I'm busy"},
        {id: 15, person_id: 5, date: '27-03-2020 14:35', message: "ok no problem"},
        {id: 16, person_id: 6, date: '26-03-2020 13:21', message: "Dude where are you?????"}
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
    dialogsData: [
        {id: 1, name: 'Anton', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fclooney-george-image.jpg&f=1&nofb=1'},
        {id: 2, name: 'Lera', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fzoe-saldana-5.jpg&f=1&nofb=1'},
        {id: 3, name: 'Nick', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fdicaprio-l-image.jpg&f=1&nofb=1'},
        {id: 4, name: 'Ben', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fben-stiller-4.jpg&f=1&nofb=1'},
        {id: 5, name: 'Kate', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Ffaces%2Fbanks-tyra-image.jpg&f=1&nofb=1'},
        {id: 6, name: 'John', photoSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.famousbirthdays.com%2Fheadshots%2Fdwayne-johnson-9.jpg&f=1&nofb=1'},
        {id: 7, name: 'B.Kingsley', photoSrc: 'https://www.famousbirthdays.com/thumbnails/kingsley-ben-large.jpg'},
        {id: 8, name: 'Will Smit', photoSrc: 'https://www.famousbirthdays.com/headshots/will-smith-1.jpg'}
        
    ],
    newMessageText: "New message",
};

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                id: 17, 
                person_id: 1, 
                date: "2020-05-09 12:00:00", 
                message: action.message
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
            };
        }
        default:
            return state;
    }
};

export const addMessage = (message) => {
    return { type: ADD_NEW_MESSAGE, message }
};

export default dialogsReduser;