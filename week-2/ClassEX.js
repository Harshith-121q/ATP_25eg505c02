// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:
class Book{



//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)
title;
author;
pages;
isAvailable;


constructor(title,author,pages,isAvailable){
    this.title=title
    this.author=author
    this.pages=pages
    this.isAvailable=isAvailable
}
//   Methods:
//       borrow() - Marks the book as not available
borrow(){
    if(this.isAvailable){
        this.isAvailable=false;
        return `You borrowed ${this.title}`
    }
    else{
       return `${this.title} is not available`
    }
}

//       returnBook() - Marks the book as available
returnBook() {
   {
    if(!(this.isAvailable)){
        this.isAvailable=true;
        return `You borrowed ${this.title}`
    }
    else{
       return ` You already borrowed ${this.title} book`
    }
}
}
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
getInfo(){
    return `The ${this.title} by ${this.author} (${this.pages})`
}
//       isLongBook() - Returns true if pages > 300, false otherwise

 isLongBook(){
    if(this.pages>=300){
        return true
    }
    else{
        return false
    }
 }

}
//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.
let b1 = new Book("The Harry Potter","Harsha",320,true)
let b2 = new Book("Major Dhyan Chand","Harsha",671,true)
let b3 = new Book("SnowWhite","Harsha",300,false)
let b4 = new Book("The Spiderman","Harsha",320,false)
let b5 = new Book("Batman","Harsha",320,true)




//   2. Perform the following operations:

//       i. Display info of all books
console.log(b1.getInfo())
console.log(b2.getInfo())
console.log(b3.getInfo())
console.log(b4.getInfo())
console.log(b5.getInfo())
//       ii. Borrow 2 books and show their availability status
console.log(b3.borrow())
console.log(b3.returnBook())

//       iii. Return 1 book and show updated status
b3.returnBook()
console.log(`${b3.title} available and checked  ${b3.isAvailable}`);
//       iv. Count how many books are "long books" (more than 300 pages)

//       v. List all available books


