// Promise banayein - Order pizza ka
const orderPizza = new Promise((resolve, reject) => {
    const pizzaReady = true; // Change to false for reject
    
    setTimeout(() => {
        if (pizzaReady) {
            resolve("🍕 Pizza ready hai! Khao!");
        } else {
            reject("😞 Oven kharab hai, pizza nahi bana");
        }
    }, 3000);
});

// Promise use karein
orderPizza
    .then((successMessage) => {
        console.log("Yay! " + successMessage);
    })
    .catch((errorMessage) => {
        console.log("Oops! " + errorMessage);
    });