let count = 0;
let book = ["Harry Potter", "The Huner Games", "JavaScript: The New Toys", "The Alchemist", "The Secret"];

for (let i = 0; i < book.length; i++){
    console.log(book[i]);
    if (book[i].includes("JavaScript")) {
        console.log(`${book[i]} is about JavaScript.`)
        count++;   }
}
let summary = {
    total: book.length,
    book_Js:count,
}
console.log(`Total number of books is ${summary.total}`);
console.log(`Number of books about JavaScript is ${summary.book_Js}`);