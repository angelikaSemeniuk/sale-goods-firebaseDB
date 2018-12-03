
export function setArrayOfItems(title, status, price) {
    return {
        type: "SET_ARRAY_OF_ITEMS",
        item: {title: title, status: status, price: price }
    }
}