// TASK 01.
async function iterateWithAsyncAwait(array) {
    console.log("TASK 01");
    for (const value of array) {
        console.log(value);
        await new Promise((resolve, reject) => setTimeout(resolve , 1000));
    }
}
const values = [1, 2, 3, 4, 5];
await iterateWithAsyncAwait(values);



// TASK 02.
const awaitCall = async () => {
    console.log("TASK 02");
    await axios.get("https://dummyjson.com/products")
        .then(({data}) => {
            const produits = data.products;
            for (const produit of produits) {
                console.log(`ID ==> ${produit.id}, TITLE ==> ${produit.title}, DESCRIPTION ==> ${produit.description}, PRICE ==> ${produit.price}`);
            }
        })
}
await awaitCall();


// TASK 03.
const awaitCallError = () => {
    axios.get("https://dummyjson.com/products")
        .then(({data}) => {
            const produits = data.products ;
            for (const produit of produits) {
                console.log(`ID ==> ${produit.id}, TITLE ==> ${produit.title}, DESCRIPTION ==> ${produit.description}, PRICE ==> ${produit.price}`);
            }
        })
        .catch(error => {
            console.log(error.message);
        })
}
// await awaitCallError();


const f1 = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("Message from fonction 1");
}
const f2 = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("Message from fonction 2");
}
const f3 = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log("Message from fonction 3");
}
const chainedAsyncFunctions  = async () => {
    console.log("TASK 03");
    await f1();
    await f2();
    await f3();
}
await chainedAsyncFunctions();