const fruits = new Set(["apple", "pear", "mango"]);
fruits["peach"] = "Princess Peach! Make a wish!";

for (const fruit in fruits) {
    console.log('fruit', fruit)
}

// for (const fruit of fruits) {
//     console.log('fruit', fruit)
// }