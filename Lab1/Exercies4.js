const item ={
    "name":"Biscuits",
    "type":"Regular",
    "category":"food",
    "price":2.0
}

function applyCoupon(category) {
    return function (discount) {
        return function (item) {
            return item.price - discount;
        }
    }
}

console.log(applyCoupon("food")(0.1)(item));