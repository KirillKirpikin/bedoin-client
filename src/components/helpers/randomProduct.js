export const randomProduct = (arr) =>{
    const copy=[...arr];
    const randomItems = []
    while (randomItems.length < 5 && copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        randomItems.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }

    return randomItems;
}