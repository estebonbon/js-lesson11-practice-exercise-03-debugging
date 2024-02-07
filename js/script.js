const form = document.querySelector("form"); // By using `form.elements`, you can access and manipulate individual form elements within the form object.
const button = document.querySelector(".add-book");
const tableBody = document.querySelector(".table-body");
const error = document.querySelector(".error");

// Factory function
const addBook = function (title, author, pages) {
  const book = {
    title: title,
    author: author,
    pages: pages,
  };
  return book; // the call return book object was added because addBook is a factory function, and so book will hold different values depending on new variable being declared with the addBook ( , , );
};

button.addEventListener("click", function (event) {
  // Grab form info
  event.preventDefault(); // By calling `event.preventDefault()`, you can stop the default action that is usually triggered by an event.

  const inputs = form.elements;
  const titleValue = inputs["title"].value; // These are values grabbed from the inputs with the class names of title, author, and pages.
  const authorValue = inputs["author"].value;
  const pagesValue = inputs["pages"].value;
  if (
    titleValue.length === 0 || // this snippet is checking whether any of the title, author, or pages fields are empty. If any of them is empty (their length is 0), the condition will be true, and subsequent code inside the `if` block will be executed.
    authorValue.length === 0 ||
    pagesValue.length === 0
  ) {
    error.innerText = "Please fill all fields.";
    return;
  }

  // Create new book object
  const book = addBook(titleValue, authorValue, pagesValue); // These variables inside the brackets hold the values, that came from their html inputs.

  // Render to DOM
  addToTable(book); // I am passing on the book object to the addToTable function. Once the addBook function has happened, book now contains its new values and will be passed on to the addToTable function.

  // Clear form
  clearForm();
});

const addToTable = function (b) {
  // book is a placeholder for the argument passed into the function
  const tr = document.createElement("tr"); // The string represents the contents of a table row (`<tr>`) in HTML, which consists of three table data cells (`<td>`)
  const rowContents = `<td>${b.title}</td><td>${b.author}</td><td>${b.pages}</td>`; // So, the `rowContents` variable in the code snippet stores an HTML string that represents a table row with three table cells (`<td>` elements), each containing the respective values of `book.title`, `book.author`, and `book.pages`.
  tr.innerHTML = rowContents;
  tableBody.append(tr);
};

const clearForm = function () {
  form.reset();
  error.innerText = "";
};
