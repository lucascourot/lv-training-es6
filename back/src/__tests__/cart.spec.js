const {addProductToCart, getTotal} = require('../cart');

test('it adds a single product', () => {
    //  Given
    const cart = [];
    const productToAdd = {
        name: "iPhone",
        price: 100000
    };

    // When
    const newCart = addProductToCart(productToAdd, cart);

    // Then
    const total = getTotal(newCart);
    expect(total).toBe(100000);
});
