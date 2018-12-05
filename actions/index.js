
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