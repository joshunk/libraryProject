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

// I can't remember what I'm doing wrong for adding stuff to the DOM. I'll figure it out.
addBook.addEventListener(
	"click",
	() => (bookInputForm.style.visibility = "visible")
);
