const add_button = document.getElementById('add');

const title = document.getElementById('title').value.trim();
const author = document.getElementById('author').value.trim();

const titlError = document.getElementById('fill_title');
const authorError = document.getElementById('fill_author');
const error = document.getElementById('error')

const list = document.querySelector('.book_display');

var book_array = [];

add_button.addEventListener('click', (e)=> {
    e.preventDefault();

    if(title === '' && author === ''){
        
        error.innerHTML = 'Please enter missing value';
    }
    else {
        alert('we got it');
        error.innerHTML = '';  
        const book = {
            book_title: title,
            book_author: author
        };
        
        book_array.push(book);
        localStorage.setItem('books', JSON.stringify(book_array));    
    }     
});


var list_display = '';
window.addEventListener('load', (event) => {

    var stored = JSON.parse(localStorage.getItem('books'));
   stored.forEach((book, index) => {
    const li = `<li>${stored.title + stored.author}</li>`;
    
    list.innerHTML = li;
   }
   );
   
})




