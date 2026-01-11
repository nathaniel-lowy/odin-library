let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    removeBook (id) {
        myLibrary = myLibrary.filter(book => book.id !== id);
        Book.displayLibrary();
    }

    make() {
        const libraryContainer = document.querySelector("#library");
        const bookDiv = document.createElement("div");
        bookDiv.classList = "book";
        bookDiv.setAttribute("data-id", this.id);
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
        read.addEventListener("click", () => {
            read.textContent = read.textContent === "Read" ? "Unread" : "Read";
        });
        const topRow = document.createElement("div");
        topRow.classList = "top-row";
        const bottomRow = document.createElement("div");
        const close = document.createElement("button");
        close.textContent = "x";
        close.classList = "close";
        close.addEventListener("click", () => {
            this.removeBook(this.id);
            // While the below does work and matches a suggestion from the instructions,
            // it is unnecessary for this as removeBook will remove the item and refresh
            // the display.
            // myLibrary.filter(book => book.id === this.id);
            // const element = document.querySelector(`[data-id="${this.id}"]`);
            // element.remove(element);
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

    static addBookToLibrary (title, author, pages, read) {
        myLibrary.push(new Book(title, author, pages, read));
    }

    static displayLibrary () {
        const libraryContainer = document.querySelector("#library");
        libraryContainer.replaceChildren();
        myLibrary.forEach((book => {
            book.make();
        }))
    } 

}


const addButton = document.querySelector("#add-book");
const dialogBackground = document.querySelector(".dialog-container");
const dialog = document.querySelector("#enter-book");
const dialogCancel = document.querySelector("#cancel");
const dialogSave = document.querySelector("#save");
const form = document.querySelector("form");

addButton.addEventListener("click", () => {
    dialogBackground.style.display = "flex";
    dialog.showModal();
    form.reset();
});
dialogCancel.addEventListener("click", () => {
    dialogBackground.style.display = "none";
    dialog.close();
});
dialogSave.addEventListener("click", () => {
    const results = document.querySelectorAll("input");
    Book.addBookToLibrary(results[0].value, results[1].value, results[2].value, results[3].checked);
    dialogBackground.style.display = "none";
    dialog.close();
    Book.displayLibrary();
});

// Book.addBookToLibrary("Book", "Author", 123, false);
// Book.addBookToLibrary("Book1", "Author1", 23, true);
// Book.addBookToLibrary("Book2", "Author2", 3, false);
// Book.addBookToLibrary("Book3", "Author3", 32, false);
// Book.addBookToLibrary("Book4", "Author4", 321, true);
// Book.addBookToLibrary("Book5", "Author5", 555, true);
// Book.addBookToLibrary("Book6", "Author6", 443, false);
// Book.addBookToLibrary("Book7", "Author7", 123, false);
// Book.addBookToLibrary("Book8", "Author8", 123, false);
// Book.addBookToLibrary("Book9", "Author9", 123, true);
// Book.addBookToLibrary("Book10", "Author10", 123, false);
// Book.addBookToLibrary("Book11", "Author11", 123, false);
// Book.addBookToLibrary("Book12", "Author12", 123, false);
// Book.addBookToLibrary("Book13", "Author13", 123, true);
// Book.addBookToLibrary("Book14", "Author14", 123, false);
// Book.addBookToLibrary("Book15", "Author15", 123, false);
// Book.addBookToLibrary("Book16", "Author16", 123, false);
