let dialogsData = [
    {id: 1, name: 'Nick'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Den'},
    {id: 4, name: 'Sara'}
]

let messageData = [
    {id: 1, message: "Hi. Realy cool weather! Do you wanna go to park?"},
    {id: 2, message: "Hi it's true. Meat me near my house in 15."},
    {id: 3, message: "Ok I'll be there!"},
    {id: 4, message: "Ok. See you 😊"}
]

let posts = [
    {id: 1, message: "Hi it's me !!!", like_count: 17},
    {id: 2, message: "Where are you?", like_count: 4},
    {id: 3, message: "Are you kidding me?", like_count: 5}
]

let state = {
    profilePage: {
        posts
    },
    messagePage: {
        messageData,
        dialogsData
    }
    
}

//console.log(state.messageData);
export default state