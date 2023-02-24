const bookForm = document.getElementById('bookForm');

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    //alert(title + author);
    addBookToLocalStorage(title,author);
    displayBooks();
    bookForm.reset();
});

function addBookToLocalStorage(title,author){
    let books = getBooksFromLocalStorage();
    books.push({title,author});
    localStorage.setItem('books',JSON.stringify(books));
}

function getBooksFromLocalStorage(){
    let books = [];
    const booksString = localStorage.getItem('books');
    if(booksString){
        books = JSON.parse(booksString);
    }
    return books;
}

function displayBooks(){
    const books = getBooksFromLocalStorage();
    const bookList = document.querySelector('.book_display');
    bookList.innerHTML = '';
    books.forEach((book,index) => {
        const li = document.createElement('li');
        li.innerHTML = `${book.title} by ${book.author} 
        <br><button onclick="deleteBook(${index})">Remove</button>
        <hr>
        `;
        
        bookList.appendChild(li);
    });    
}

displayBooks();

function deleteBook(index){
    let books = getBooksFromLocalStorage();
    books.splice(index,1);
    localStorage.setItem('books',JSON.stringify(books));
    displayBooks();
}





/*const button = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');

const display = document.querySelector('.book_display');
display.innerHTML = '';

button.addEventListener('click', addBook);

let stored = [];

function addBook(e){
    e.preventDefault();   
    let toStore = {
        book_title: title.value,
        book_author: author.value
    }
    stored.push(toStore);
    let l = localStorage.setItem('stored', JSON.stringify(stored)); 
    getBook();
    display1();

    document.forms[0].reset();  
}

function getBook(){
    let ret = localStorage.getItem('stored');
    if(ret){
        stored = JSON.parse(ret);
    }  
    return stored  
}

getBook();

function display1(){
    stored.forEach(function(book,index){
        display.innerHTML += `
        <li>${book.book_title} and ${book.book_author}</li>
        <button onClick = "deleteBook(${index})">Romove</button>        
        
        <hr>
        `;
    
    });

}
display1();

function deleteBook(index) {
    let stored = getBook();
    stored.splice(index, 1);
    localStorage.setItem('stored', JSON.stringify(stored));
    display1();
  }

/*
removeButton.addEventListener('click', function() {
    removeBook(i);
    displayBookList();
  });
*/


/*
function display(){
    list.innerHTML = '';
    for(let i=0; i<stored.length;i++){
        let storedBook = stored[i];
        list.innerHTML = `
        <li>${storedBook.book_title} and ${storedBook.book_author}</li>
        
        `;
    }

}*/


/*
let add_button = document.getElementById('add');
let title = document.getElementById('title');
let author = document.getElementById('author');
let list = document.querySelector('.book_display');

let stored = [];
dd_button.addEventListener('click', add);   

add_button.addEventListener('click', (e) =>{

    e.preventDefault();
    
    let book_obj = {
        book_title: title.value,
        book_author: author.value
    };
    stored.push(book_obj);  
    localStorage.setItem('stored', JSON.stringify(stored));
    document.forms[0].reset();

}); 

let storedBooks = localStorage.getItem('stored');
    if(storedBooks){
        stored = JSON.parse(storedBooks)
    }


    
/*
    for (let i=0;i<stored.length;i++){
        list.innerHTML += `
    <li> ${stored[i].book_title} ----</li>
    <li>Length${stored.length}</li>
    `;

    }*/

/*
function add(e){
    e.preventDefault();
    
    let book_obj = {
        book_title: title.value,
        book_author: author.value
    };
    stored.push(book_obj);  
    localStorage.setItem('stored', JSON.stringify(stored));
    document.forms[0].reset();

    getBooks();
    display();
}

function getBooks(){
    let storedBooks = localStorage.getItem('stored');
    if(storedBooks){
        stored = JSON.parse(storedBooks)
    }
}

getBooks();

function display(){
    list.innerHTML = '';
    for(let i=0; i<stored.length;i++){
        let storedBook = stored[i];
        list.innerHTML = `
        <li>${storedBook.book_title} and ${storedBook.book_author}</li>
        
        `;
    }

}

display();*/