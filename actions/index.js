
export function setArrayOfItems(title, status, price) {
    return {
        type: "SET_ARRAY_OF_ITEMS",
        item: {title: title, status: status, price: price }
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