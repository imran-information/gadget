const getToProduct = () => {
    const getProduct = localStorage.getItem('products');

    if (getProduct) {
        return JSON.parse(getProduct);
    }
    return []
}

const setProductCart = (product) => {
    const getProduct = getToProduct();
    const exist = getProduct.find((item => item.id == product.id))
    if (exist) {
        return alert('alredy added')
    }
    getProduct.push(product)
    const productStringify = JSON.stringify(getProduct)
    localStorage.setItem('products', productStringify)
}


// handle Heart btn  
const getToHartProduct = () => {
    const getProduct = localStorage.getItem('heart');

    if (getProduct) {
        return JSON.parse(getProduct);
    }
    return []
}

const setHartProductCart = (product) => {
    const getProduct = getToHartProduct();
    const exist = getProduct.find((item => item.id == product.id))
    if (exist) {
        return alert('alredy added')
    }
    getProduct.push(product)
    const productStringify = JSON.stringify(getProduct)
    localStorage.setItem('heart', productStringify)
}

export { setProductCart, setHartProductCart, getToProduct }