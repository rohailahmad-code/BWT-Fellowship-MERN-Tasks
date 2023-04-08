let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

// let is_shop_open = true;

// USING AWAIT KEYWORD

// let toppingsChoice = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(
//                 console.log("Which topping would you love? ")
//             )
//         }, 3000)
//     })
// }

// async function kitchen () {
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppingsChoice()

//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen();

// console.log("Cleaning the dishes")
// console.log("Cleaning the tables")
// console.log("Taking other orders")

// ICE CREAM EXAMPLE 

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop is Closed"))
        }
    });
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0000)
        console.log("Start the production")

        await time(2000)
        console.log("Cut the Fruits")

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(`1000`)
        console.log("Start the machine")

        await time(`2000`)
        console.log(`ice cream placed on ${stocks.holder[0]}`)

        await time(`3000`)
        console.log(`${stocks.toppings[0]} was selected`)

        await time(`2000`)
        console.log("Serve ice cream")

    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen();