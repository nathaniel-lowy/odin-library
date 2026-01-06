let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.make = function () {
    const libraryContainer = document.querySelector("#library");
    const bookDiv = document.createElement("div");
    bookDiv.classList = "book";
    const title = document.createElement("p");
    title.textContent = this.title;
    title.classList = "title";
    const author = document.createElement("p");
    author.textContent = this.author;
    author.classList = "author";
    const bottomInfo = document.createElement("div");
    bottomInfo.classList = "bottom-info";
    const pages = document.createElement("p");
    pages.textContent = this.pages + " pages";
    pages.classList = "pages";
    const read = document.createElement("p");
    read.textContent = this.read ? "Read" : "Unread";
    read.classList = "read";
    read.tabIndex = 0;
    read.addEventListener("click", ()=> {
        read.textContent = read.textContent === "Read" ? "Unread" : "Read";
    })
    const topRow = document.createElement("div");
    topRow.classList="top-row";
    const bottomRow = document.createElement("div");
    const close = document.createElement("button");
    close.textContent = "x";
    close.classList = "close";
    close.addEventListener("click", () => {
        removeBook(this.id);
    });

    topRow.appendChild(close);
    bookDiv.appendChild(topRow);
    bottomRow.appendChild(title);
    bottomRow.appendChild(author);
    bottomInfo.appendChild(pages);
    bottomInfo.appendChild(read);
    bottomRow.appendChild(bottomInfo);
    bookDiv.appendChild(bottomRow);
    libraryContainer.appendChild(bookDiv);
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    displayLibrary();
}

function displayLibrary() {
    const libraryContainer = document.querySelector("#library");
    libraryContainer.replaceChildren();
    myLibrary.forEach((book => {
        book.make();
    }));
}

const addButton = document.querySelector("#add-book");
const dialogBackground = document.querySelector(".dialog-container");
const dialog = document.querySelector("#enter-book");
const dialogCancel = document.querySelector("#cancel");
const dialogSave = document.querySelector("#save");
const form = document.querySelector("form");

addButton.addEventListener("click", ()=> {
    dialogBackground.style.display = "flex";
    dialog.showModal();
    form.reset();
});
dialogCancel.addEventListener("click", ()=> {
    dialogBackground.style.display = "none";
    dialog.close();
});
dialogSave.addEventListener("click", ()=> {
    const results = document.querySelectorAll("input");
    addBookToLibrary(results[0].value, results[1].value, results[2].value, results[3].checked);
    dialogBackground.style.display = "none";
    dialog.close();
    displayLibrary();
});

// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2 With A Long Long Title", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);
// addBookToLibrary("Book", "Author", 123, false);
// addBookToLibrary("Book2", "Author2", 234, true);
// addBookToLibrary("Book3", "Author3", 345, false);

displayLibrary();