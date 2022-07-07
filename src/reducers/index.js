export const getNewsReducer = (state=[], action) => {
    console.log(action.item,'reducer')

    switch(action.type){
        case "GET_NEWS": return action.item;

        default: return state;

    }
}