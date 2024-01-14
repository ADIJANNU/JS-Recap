// REDUCE

// const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce( (acc,curVal) =>  {
//     // console.log(`accumulator: ${acc} and current value: ${curVal}`);
//     return acc + curVal
// },0)

// console.log(myTotal);

// Used in Shopping Carts to total the bill value

// Example of Shopping Cart 

const shoppingCart = [
    { 
        itemName : "Dairy Milk Silk",
        price : 160
    },
    { 
        itemName : "Red Velvet Cake 500g",
        price : 750
    },
    { 
        itemName : "Dior Perfume",
        price : 11999
    },
]

const billToPay = shoppingCart.reduce((acc,item) => {
    console.log(`Item: ${item.itemName}, price:${acc} , item: ${item.price}`);
    return acc + item.price
},0)
console.log(`Total: ${billToPay} `);


