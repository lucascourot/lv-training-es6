const addProductToCart = (productToAdd, cart) => [...cart, productToAdd];
const getTotal = cart => cart.reduce((price, item) => item.price + price, 0);

module.exports = {addProductToCart, getTotal};
