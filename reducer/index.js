const initialState = {
    items:[],
    haveGotItems: false,
    inputValue: "ç"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ARRAY_OF_ITEMS": {
            return Object.assign({}, state, {
                items: [...state.items, action.item],
                haveGotItems: true
            })
        }
        default:
            return state;
    }
};

export default reducer;