
export function setArrayOfItems(title, status, price) {
    return function (dispatch) {
        dispatch({
            type: "SET_ARRAY_OF_ITEMS",
            item: {title: title, status: status, price: price }
        });
        dispatch({type: "ADD_ATTRIBUTE_FOR_EACH_ITEM"})

    }
}

export function checkOnAuthStateChanged(user) {
    return {
        type: "CHECK_ON_AUTH_STATE_CHANGED",
        value: user
    }
}

export function handleChangeOnInput( value) {
    return {
        type: "HANDLE_CHANGE_ON_INPUT",
        value: value
    }
}

export function getClearArrayOfItems() {
    return {
        type: "GET_CLEAR_ARRAY_OF_ITEMS"
    }
}

export function getClearArrayOfSearchedItems() {
    return {
        type: "GET_CLEAR_ARRAY_OF_SEARCHED_ITEMS"
    }
}

export function handleChangeOfTitle(title) {
    return {
        type: "HANDLE_CHANGE_OF_TITLE",
        value: title
    }
}

export function handleChangeOfStatus(status) {
    return {
        type: "HANDLE_CHANGE_OF_STATUS",
        value: status
    }
}

export function handleChangeOfPrice(price) {
    return {
        type: "HANDLE_CHANGE_OF_PRICE",
        value: price
    }
}

export function addItemFunc() {
    return {
        type: "ADD_ITEM"
    }
}

export function handleSubmitOnForm() {
    return {
        type: "HANDLE_SUBMIT_ON_FORM"
    }
}

export function openModalWindow() {
    return {
        type: "OPEN_MODAL_WINDOW"
    }
}

export function closeModalWindow() {
    return {
        type: "CLOSE_MODAL_WINDOW"
    }
}

export function changeLogin (login) {
    return {
        type: "CHANGE_USER_LOGIN",
        value: login
    }
}

export function changePassword(password) {
    return {
        type: "CHANGE_USER_PASSWORD",
        value: password
    }
}

export function makeSubmitOnSignUpForm() {
    return {
        type: "MAKE_SUBMIT_ON_SIGN_UP"
    }
}

export function catchError(error) {
    return {
        type: "CATCH_ERROR",
        value: error
    }
}

export function setCurrentUser( currentUser) {
    return {
        type: "SET_CURRENT_USER",
        value: currentUser
    }
}

export function handleSignOut() {
    return {
        type: "HANDLE_SIGN_OUT"
    }
}

export function makeSubmitOnSignInForm() {
    return {
        type: "MAKE_SUBMIT_ON_SIGN_IN"
    }
}

export function handleChangingThePage() {
    return {
        type: "HANDLE_CHANGING_THE_PAGE"
    }
}

export function addItemToBasket(item, index) {
    return function (dispatch) {
        dispatch({
            type: "ADD_ITEM_TO_BASKET",
            value: {title: item.title, price: item.price, addedToBasket: item.addedToBasket}
        });
        dispatch({
            type: "CHANGE_ATTRIBUTE_FOR_ITEMS",
            index: index,
            addedToBasket: item.addedToBasket
        });
    }
}

export function addItemToBasketInTheLocalStorage(item) {
    return function (dispatch) {
        dispatch({
            type: "ADD_BASKET_TO_THE_STORAGE",
            value: {title: item.title, price: item.price, addedToBasket: item.addedToBasket}
        });
        dispatch({
            type: "CHANGE_ATTRIBUTE_FOR_ITEMS_IN_STORAGE",
            title: item.title,
            addedToBasket: item.addedToBasket
        });
    }
}
export function deleteItemFromBasket (index) {
    return function (dispatch) {
        dispatch({
            type: "DELETE_ITEM_FROM_BASKET_IN_STORAGE",
            index: index
        });
        dispatch({
            type: "DELETE_ITEM_FROM_BASKET",
            index: index
        });

    }
}

export function showInfoMessage() {
    return {
        type: "SHOW_INFO_MESSAGE"
    }
}

export function closeInfoMessage() {
    return {
        type: "CLOSE_INFO_MESSAGE"
    }
}

export function setArrayOfPersonalAddedItems (title, status, price) {
    return {
        type: "SET_ARRAY_OF_PERSONAL_ADDED_ITEMS",
        value: {title: title, status: status, price: price}
    }
}