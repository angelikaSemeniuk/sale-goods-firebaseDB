const initialState = {
    items:[],
    searchedItems: [],
    haveGotItems: false,
    addItem: false,
    inputValue: "",
    title: "",
    status: "",
    price: ""
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
                items: [],
                addItem: false
            })
        }
        case "GET_CLEAR_ARRAY_OF_SEARCHED_ITEMS": {
            return Object.assign({}, state, {
                searchedItems: [],
                addItem: false
            })
        }
        case "HANDLE_CHANGE_OF_TITLE": {
            return Object.assign({}, state, {
                title: action.value
            })
        }
        case "HANDLE_CHANGE_OF_STATUS": {
            return Object.assign({}, state, {
                status: action.value
            })
        }
        case "HANDLE_CHANGE_OF_PRICE": {
            return Object.assign({}, state, {
                price: action.value
            })
        }
        case "ADD_ITEM": {
            return Object.assign({}, state, {
                addItem: true
            })
        }
        case "HANDLE_SUBMIT_ON_FORM": {
            return Object.assign({}, state, {
                addItem: false,
                title: "",
                status: "",
                price: ""
            })
        }
        default:
            return state;
    }
};

export default reducer;