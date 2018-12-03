
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