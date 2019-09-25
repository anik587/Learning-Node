const product = {
    label: 'Iphone',
    price: 700,
    stock: 10000,
    salePrice: undefined,
}

const {label: productLabel, price: productPrice, rating = 5} = product;

console.log(productLabel)
console.log(productPrice)
console.log(rating);
