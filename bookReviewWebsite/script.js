function searchBook() {
    const searchInput = document.getElementById('searchBar').value.toUpperCase();
    const bookList = document.getElementById('bookList');
    const books = bookList.getElementsByTagName('li');

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getAttribute('data-title');
        if (title.toUpperCase().indexOf(searchInput) > -1) {
            books[i].style.display = '';
        } else {
            books[i].style.display = 'none';
        }
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        redirectToReview();
    }
}

function redirectToReview() {
    const searchInput = document.getElementById('searchBar').value.toUpperCase();
    const bookList = document.getElementById('bookList');
    const books = bookList.getElementsByTagName('li');

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getAttribute('data-title');
        if (title.toUpperCase() === searchInput) {
            const link = books[i].querySelector('a').href;
            window.location.href = link;
            return;
        }
    }
    alert('Book not found. Please enter a valid book title.');
}
