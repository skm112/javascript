const converToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    } else {
        throw Error('Amount needs to be number')
    }
}

try {
    const myValue = converToRs('five')
    console.log(myValue);
} catch (error) {
    console.log(error.message);

}