let count = 0;
let arr_obj = [
    { name: "item1", quantity: 4 },
    { name: "item2", quantity: 10 },
    { name: "item3", quantity: 2 },
    { name: "item3", quantity: 7 },
]
for (let i = 0; i < arr_obj.length; i++){
    console.log(`Name : ${arr_obj[i].name}, Quantity : ${arr_obj[i].quantity}`);
    console.log(arr_obj[i].quantity);
    if (arr_obj[i].quantity < 5) {
        console.log(`${arr_obj[i].name} needs restocking.`);
        count++;
    }
}
let summary = {
    total: arr_obj.length,
    restock_item: count,
}
console.log(`Total items in the inventory is ${summary.total}`);
console.log(`Number of items that need restocking is ${summary.restock_item}`);