const getNewsAction = (item) => {
    return{
        type: "GET_NEWS",
        item
    }
}

export default getNewsAction;