const myLibrary = [];

function Book(title, author, pages, readStatus) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.readStatus = readStatus;
	this.info = function () {
		console.log(
			`${title} by ${author}. It is ${pages} pages long and I have ${readStatus} this book.`
		);
		return Book.info;
	};
}

const timeOfTheTwins = new Book(
	"Time of the Twins",
	"Margaret Weis & Tracy Hickman",
	"400",
	"read"
);

const guardsGuards = new Book(
	"Guards! Guards!",
	"Terry Pratchett",
	"384",
	"read"
);

const blackPrism = new Book("The Black Prism", "Brent Weeks", "640", "read");

const reaperMan = new Book("Reaper Man", "Terry Pratchett", "384", "read");

function addBookToLibrary() {}

function printBook(book) {
	console.log(book.title, book.author, book.pages, book.readStatus);
}

function pushTitleTest(title) {
	const bTitle = document.getElementById("bookTitle");
	bTitle.innerText = title;
}

const submitButton = document.querySelector(".submitButton");
const bookInputForm = document.querySelector(".bookInputForm");
const addBook = document.querySelector(".addBook");
const unhideElement = () => (bookInputForm.style.visibility = "visible");
const hideElement = () => (bookInputForm.style.visibility = "hidden");

const bookShelf = document.querySelector(".bookShelf");

const newTitle = document.getElementById("newTitle");
const newAuthor = document.getElementById("newAuthor");
const newPages = document.getElementById("newPages");
const newReadStatus = document.getElementById("newReadStatus");

// Hide and un-hide the form
addBook.addEventListener("click", unhideElement);

// Pull the info from the form, use the constructor to build book, and push it to the myLibrary array
function bookBuilder() {
	console.log("Moo");
	myLibrary.push(
		new Book(
			newTitle.value,
			newAuthor.value,
			newPages.value,
			newReadStatus.value
		)
	);
	console.log(myLibrary);
}

submitButton.addEventListener("click", () => {
	bookBuilder();
	bookPusher();
	hideElement();
});
// Arrow function breakdown because I'm rusty
// const myArrowFunction = () => {
// 	console.log("This is the first statement");
// 	console.log("This is the second statement");
// 	// Add more statements or function calls as needed
//   };

//Write a function that loops through an array of books and displays them on the page

let newDiv = document.createElement("div");
// newDiv.id = book.Title;

function bookPusher() {
	let x = 0;
	myLibrary.forEach((book) => {
		let newDiv = document.createElement("div");
		let newTitle = document.createElement("p");
		let newAuthor = document.createElement("p");
		let newPages = document.createElement("p");
		let newRead = document.createElement("p");
		let deleteButton = document.createElement("button");

		newDiv.id = x + 1;
		newTitle.innerText = book.title;
		newAuthor.innerText = book.author;
		newPages.innerText = book.pages;
		newRead.innerText = book.readStatus;
		// Write a function that deletes the book based on bookID? Div ID? Not sure yet.
		deleteButton.id = "book" + x + 1;
		deleteButton.innerText = "Delete Book";

		newDiv.append(newTitle, newAuthor, newPages, newRead, deleteButton);
		bookShelf.append(newDiv);
	});
	console.log(myLibrary);
}

bookPusher();
