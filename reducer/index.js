const initialState = {
    items:[],
    searchedItems: [],
    haveGotItems: false,
    inputValue: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ARRAY_OF_ITEMS": {
            return Object.assign({}, state, {
                items: [...state.items, action.item],
                searchedItems: [...state.searchedItems, action.item],
                haveGotItems: true
            })
        }
        case "HANDLE_CHANGE_ON_INPUT": {
            return Object.assign({}, state, {
                inputValue: action.value
            })
        }
        case "GET_CLEAR_ARRAY_OF_ITEMS" : {
            return Object.assign({}, state, {
                items: []
            })
        }
        case "GET_CLEAR_ARRAY_OF_SEARCHED_ITEMS": {
            return Object.assign({}, state, {
                searchedItems: []
            })
        }
        default:
            return state;
    }
};

export default reducer;