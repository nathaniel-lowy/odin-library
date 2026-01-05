const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
    const libraryContainer = document.querySelector("#library");
    myLibrary.forEach((book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList = "book";

        const title = document.createElement("p");
        title.textContent = book.title;
        title.classList = "title";
        const author = document.createElement("p");
        author.textContent = book.author;
        author.classList = "author";
        const pages = document.createElement("p");
        pages.textContent = book.pages;
        pages.classList = "pages";
        const read = document.createElement("p");
        read.textContent = book.read;
        read.classList = "read";
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bookDiv.appendChild(pages);
        bookDiv.appendChild(read);

        libraryContainer.appendChild(bookDiv);
    }));
}

addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);
addBookToLibrary("Book", "Author", 123, false);
addBookToLibrary("Book2", "Author2", 234, true);
addBookToLibrary("Book3", "Author3", 345, false);

displayLibrary();