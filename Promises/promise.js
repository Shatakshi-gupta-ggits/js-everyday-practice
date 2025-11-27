// 1. Promise Banana
const checkWeather = new Promise((resolve, reject) => {
    const isSunny = Math.random() > 0.5; // 50% chance
    
    setTimeout(() => {
        if (isSunny) {
            resolve("Haan! Sunny day hai, picnic kar sakte hain! ☀️");
        } else {
            reject("Nahi! Barish ho rahi hai, ghar par raho! 🌧️");
        }
    }, 2000);
});

// 2. Promise Use Karna
checkWeather
    .then((result) => {
        console.log("SUCCESS:", result);  // Jab resolve hoga
    })
    .catch((error) => {
        console.log("ERROR:", error);     // Jab reject hoga
    });

console.log("Weather check shuru hua...");