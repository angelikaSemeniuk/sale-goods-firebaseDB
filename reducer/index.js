const initialState = {
    items:[],
    searchedItems: [],
    haveGotItems: false,
    addItem: false,
    inputValue: "",
    title: "",
    status: "",
    price: "",
    openedModalWindow: false,
    login:"",
    password: "",
    submit: false,
    authorized: false,
    error: "",
    currentUser: ""
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
        case "OPEN_MODAL_WINDOW": {
            return Object.assign({}, state, {
                openedModalWindow: true
            })
        }
        case "CLOSE_MODAL_WINDOW": {
            return Object.assign({}, state, {
                openedModalWindow: false
            })
        }
        case "CHANGE_USER_LOGIN": {
            return Object.assign({}, state, {
                login: action.value
            })
        }
        case "CHANGE_USER_PASSWORD": {
            return Object.assign({}, state, {
                password: action.value
            })
        }
        case "MAKE_SUBMIT_ON_SIGN_UP": {
            return Object.assign({}, state, {
                submit: true,
                authorized: true,
                openedModalWindow: false
            })
        }
        case "CATCH_ERROR": {
            return Object.assign({}, state, {
                error: action.value,
                login: "",
                password: ""
            })
        }
        case "SET_CURRENT_USER": {
            return Object.assign({}, state, {
                currentUser: action.value
            })
        }
        case "HANDLE_SIGN_OUT": {
            return Object.assign({}, state, {
                authorized: false,
                login: "",
                password: "",
                currentUser: "",
                submit: false

            })
        }
        default:
            return state;
    }
};

export default reducer;