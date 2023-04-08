
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};


let order = (Fruit_name, call_prduction) => {

    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected.`)
        call_prduction()
    },2000)
    
}

let production = () => {
     setTimeout(()=>{
        console.log("Production has started")

        setTimeout(()=>{
            console.log("The Fruit has been chopped")

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`);

                setTimeout(()=>{
                    console.log("The Machine was started.")

                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} was Selected For Holder.`);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was Selected for Topping.`);

                            setTimeout(()=>{
                                console.log("Ice Cream is Ready to Serve.")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        }, 2000)
     },0000)
}

order(2, production);