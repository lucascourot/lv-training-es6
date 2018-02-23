const addProductToCart = (productIdToAdd, cart) => {
    const newCart = {...cart};

    newCart[productIdToAdd] = (newCart[productIdToAdd] || 0) + 1;

    return newCart;
};

const removeProductFromCart = (productIdToAdd, cart) => {
    const newCart = {
        ...cart
    };

    if (newCart[productIdToAdd] > 0) {
        newCart[productIdToAdd]--;
    }

    if (newCart[productIdToAdd] <= 0) {
        delete newCart[productIdToAdd];
    }

    return newCart;
};

const getTotal = cart => cart.reduce((price, item) => item.price + price, 0);

module.exports = {addProductToCart, removeProductFromCart, getTotal};
