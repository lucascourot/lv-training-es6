const {addProductToCart, removeProductFromCart, getTotal} = require('../cart');

test('it adds a single product', () => {
    //  Given
    const cart = [];
    const productToAdd = 1;

    // When
    const newCart = addProductToCart(productToAdd, cart);

    // Then
    expect(Object.keys(newCart).length).toBe(1);
});

test('it groups products by quantity', () => {
    //  Given
    const cart = {
        1: 1
    };

    const productIdToAdd = 1;

    // When
    const newCart = addProductToCart(productIdToAdd, cart);

    // Then
    expect(newCart).toEqual({
        1: 2
    });
});

test('it remove product from cart', () => {
    //  Given
    const cart = {
        1: 10
    };

    const productIdToAdd = 1;

    // When
    const newCart = removeProductFromCart(productIdToAdd, cart);

    // Then
    expect(newCart).toEqual({
        1: 9
    });
});


test('it cannot remove product if not incart', () => {
    //  Given
    const cart = {1:0};

    const productIdToAdd = 1;

    // When
    const newCart = removeProductFromCart(productIdToAdd, cart);

    // Then
    expect(newCart).toEqual({});
});
