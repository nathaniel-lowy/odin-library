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
    libraryContainer.replaceChildren();
    myLibrary.forEach((book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList = "book";

        const title = document.createElement("p");
        title.textContent = book.title;
        title.classList = "title";
        const author = document.createElement("p");
        author.textContent = book.author;
        author.classList = "author";
        const bottomInfo = document.createElement("div");
        bottomInfo.classList = "bottom-info";
        const pages = document.createElement("p");
        pages.textContent = book.pages + " pages";
        pages.classList = "pages";
        const read = document.createElement("p");
        read.textContent = book.read ? "Read" : "Unread";
        read.classList = "read";
        bookDiv.appendChild(title);
        bookDiv.appendChild(author);
        bottomInfo.appendChild(pages);
        bottomInfo.appendChild(read);
        bookDiv.appendChild(bottomInfo);

        libraryContainer.appendChild(bookDiv);
    }));
}

const addButton = document.querySelector("#add-book");
const dialogBackground = document.querySelector(".dialog-container");
const dialog = document.querySelector("#enter-book");
const dialogCancel = document.querySelector("#cancel");
const dialogSave = document.querySelector("#save");

addButton.addEventListener("click", ()=> {
    dialogBackground.style.display = "flex";
    dialog.showModal();
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
addBookToLibrary("Book2 With A Long Long Title", "Author2", 234, true);
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