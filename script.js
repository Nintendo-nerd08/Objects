const book = {
    title: "The Legend Of Zelda: Twilight Princess manga",
    author: "akira Himekawa",
    year: 2016,
    getSummary: function () {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year} `;
    }
}




book.genre = "Fantasy";
delete book.year;
console.log(book);