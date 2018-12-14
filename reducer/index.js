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
    currentUser: "",
    mybasket:[],
    showedInfoMessage: false,
    itemAdded: false
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
        case "CHECK_ON_AUTH_STATE_CHANGED": {
            return Object.assign({}, state, {
                authorized: !!action.value
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
                price: "",
                itemAdded: true
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
        case "SHOW_INFO_MESSAGE": {
            return Object.assign({}, state, {
                showedInfoMessage: true
            })
        }
        case "CLOSE_INFO_MESSAGE": {
            return Object.assign({}, state, {
                showedInfoMessage: false
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
                openedModalWindow: false,
                error: ""
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
        case "MAKE_SUBMIT_ON_SIGN_IN": {
            return Object.assign({}, state, {
                submit: true,
                authorized: true,
                openedModalWindow: false,
                error: ""
            })
        }
        case "HANDLE_CHANGING_THE_PAGE": {
            return Object.assign({}, state, {
                error: "",
                submit: false
            })
        }
        case "ADD_ITEM_TO_BASKET": {
            return Object.assign({}, state, {
                mybasket: [...state.mybasket, action.value]
            })

        }
        default:
            return state;
    }
};

export default reducer;