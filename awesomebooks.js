const add_button = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const list = document.querySelector('.book_display');

var book_array = [];

add_button.addEventListener('click', (e)=> {
    e.preventDefault()
    
    const book = {
        book_title: title.value,
        book_author: author.value,
    };
    
    book_array.push(book);
    localStorage.setItem('books', JSON.stringify(book_array));    
     
});
var list_display = '';
window.addEventListener('load', (event) => {

    var stored = JSON.parse(localStorage.getItem('books'));
    console.log(stored);
   // console.log('The page has fully loaded');
   stored.forEach((book) =>{
     list_display = `
     <li>${stored.title}<br>${stored.author}</li>
     `;
   });
   list.appendChild(list_display);

});



